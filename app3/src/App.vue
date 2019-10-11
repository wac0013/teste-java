<template>
  <v-app>
    <v-app-bar app color="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <span style="color: white">Teste Java</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content :class="`d-flex justify-center`">
      <v-card class="mx-auto " :class="`justify-center col-md-8 col-lg-6`" :raised="true" >
        <v-card-text>
          <v-form v-model="formValid" @submit="submit()">
            <v-row>
              <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="city"
                :items="cities"
                item-text="label"
                item-value="value"
                label="Selecione Cidade"
                no-data-text="Nenhum dado disponível"
                :rules="[v => !!v || 'Data obrigatoria']"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-row>
              <v-col>
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateCheckinFormated"
                      label="Data check-in"
                      prepend-icon="event"
                      :rules="[v => !!v || 'Data obrigatoria']"
                      outlined
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="checkin" @input="menu1 = false" :min="today.toISOString().slice(0,10)" locale="pt-BR"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateCheckoutFormated"
                      label="Data check-out"
                      prepend-icon="event"
                      outlined
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="checkout" @input="menu2 = false" :min="checkinPlus" locale="pt-BR"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col >
                <v-text-field
                  label="Adultos"
                  v-model="adults"
                  type="number"
                  min="0"
                  :rules="[v => (v && v > 0) || 'Deve-se ter pelo menos um adulto',]"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Crianças"
                  v-model="childs"
                  type="number"
                  min="0"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            </v-row>
          </v-form> 
        </v-card-text>  
        <v-card-actions>
          <v-btn :disabled="!formValid" :block="true" :rounded="true" color="primary" :loading="processing" @click="submit()">Calcular</v-btn>  
        </v-card-actions>     
      </v-card>
    </v-content>

    <v-content v-if="hotels">
      <v-data-table
        :headers="headers"
        :items="hotels"
        item-key="key"
        no-data-text="Nenhum dado"
        :sort-by="['id', 'roomId']"
        multi-sort
        class="elevation-1"
      > 
      <!--<template v-slot:expanded-item="{ hotels }">
          <td :colspan="headers.length">Preço por adulto: {{hotels.priceDetail.pricePerDayAdult}}</td>
          <td :colspan="headers.length">Preço por criança: {{hotels.priceDetail.pricePerDayChild}}</td>
        </template>-->
      </v-data-table>

    </v-content>

    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import HelloWorld from "./components/HelloWorld.vue";
import axios from 'axios';

interface IPriceDetail {
  pricePerDayAdult: Number;
  pricePerDayChild: Number;
}

interface IHotel {
  key: string;
  cityName: string;
  id: number;
  roomId: number;
  categoryName: string;
  priceDetail: IPriceDetail;  
  totalPrice: Number;
}

@Component({})
export default class App extends Vue {
  checkin: string =  '';
  checkout: string =  '';
  today: Date = new Date();
  adults: number = 0;
  childs: number = 0;
  city: number = 0;
  formValid: boolean = false;
  menu1: boolean = false;
  menu2: boolean = false;
  cities = [{label: 'São Paulo', value: 9626 }, {label: 'Rio de Janeiro', value: 7110 }, {label: 'Porto Seguro', value: 1032 }];
  processing: boolean = false;
  hotels: IHotel[] = [];
  headers = [{
            text: 'Hotel',
            align: 'left',
            sortable: true,
            value: 'id',
          },
          { text: 'Quarto', sortable: true, value: 'roomId' },
          { text: 'Categoria', sortable: false, value: 'categoryName' },
          { text: 'Valor Total', sortable: false, value: 'totalPrice' }];

  cityRules = [];


  private formatDate (date: string): string {
    if (!date) return '';

    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }

  get dateCheckinFormated(): string {
    return this.formatDate(this.checkin);
  }

  get dateCheckoutFormated(): string {
    return this.formatDate(this.checkout);
  }

  get checkinPlus(): string {
    return this.checkin ? new Date(new Date(this.checkin).valueOf() + 24 * 60 * 60 * 1000).toISOString() : '';
  }

  submit() {
    if (!this.formValid) return;

    this.processing = true;

    axios.get('http://localhost:9000/api/prices', {params: {
      adults: this.adults,
      childs: this.childs,
      dateCheckIn: new Date(this.checkin),
      dateCheckOut: new Date(this.checkout),
      cityCode: this.city
    }}).then(
      res => {
        this.hotels = [];

        if (res.data) {
          res.data.forEach((h: any) => {
            h.rooms.forEach((r: any) => {
              this.hotels.push({ 
                key: `${h.id} - ${r.roomID}`,
                cityName: h.cityName,
                id: h.id,
                roomId: r.roomID,
                categoryName: r.categoryName,
                priceDetail: {
                  pricePerDayAdult: r.priceDetail.pricePerDayAdult.toFixed(2),
                  pricePerDayChild: r.priceDetail.pricePerDayChild.toFixed(2)
                }, 
                totalPrice: r.totalPrice.toFixed(2)});
            });
          });
        }
        
        this.processing = false;
      }
    ).catch(err => {
      this.hotels = [];      
      this.processing = false;
    });
  }

}
</script>
