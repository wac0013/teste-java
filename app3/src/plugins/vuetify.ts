import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    themes: {
      light: {
          primary: '#3f51b5',
          secondary: '#e91e63',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#03a9f4',
          success: '#4caf50'        
      }
    }
  }
});

