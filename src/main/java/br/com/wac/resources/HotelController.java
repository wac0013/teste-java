package br.com.wac.resources;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.wac.exceptions.HotelApiException;
import br.com.wac.services.ApiConsumerService;
import br.com.wac.services.ApiService;

@RestController
@RequestMapping("/api")
public class HotelController {
	
	@Autowired
	private ApiConsumerService apiConsumer;
	
	@Autowired
	private ApiService apiService;

    @GetMapping(value = "/city/{cityId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<?> listHotelsByCity(@PathVariable Integer cityId) {
        return ResponseEntity.ok(apiConsumer.getHotelsByCity(cityId));
    }
    
    @GetMapping(value = "/hotel/{hotelId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<?> listHotelsById(@PathVariable Integer hotelId) {
        return ResponseEntity.ok(apiConsumer.getHotelsByCity(hotelId));
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/prices", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<?> getPrices(
    		@RequestParam("adults") Integer adults, 
    		@RequestParam("childs") Integer childs, 
    		@RequestParam("dateCheckIn") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateCheckIn, 
    		@RequestParam("dateCheckOut") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateCheckOut,
    		@RequestParam("cityCode") Integer cityCode
    ) throws HotelApiException {
    	return ResponseEntity.ok(apiService.getValuesHotels(dateCheckIn, dateCheckOut, cityCode, adults, childs));
    }

}
