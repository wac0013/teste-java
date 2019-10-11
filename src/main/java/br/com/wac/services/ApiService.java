package br.com.wac.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.wac.dtos.ResponseHotelDto;
import br.com.wac.exceptions.HotelApiException;

@Service
public class ApiService {
	
	@Autowired 
	ApiConsumerService apiConsumer;
	
	public List<ResponseHotelDto> getValuesHotels(Date checkIn, Date checkOut, Integer cityCode, Integer numAdults, Integer numChild) throws HotelApiException {
		SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
    	try {
    		checkIn = format.parse(format.format(checkIn));
    		checkOut = format.parse(format.format(checkOut));
		} catch (ParseException e) {
			throw new HotelApiException("Erro na conversão das datas!", e);
		}
    	
    	if (checkIn.after(checkOut)) throw new HotelApiException("Data de check-out deve ser anterior a data de check-in!");
    	
    	Long dateDiff  = (checkOut.getTime() - checkIn.getTime()) / (24 * 60 * 60 * 1000);
    	
    	List<ResponseHotelDto> hotels = new ArrayList<ResponseHotelDto>();
    	
    	apiConsumer.getHotelsByCity(cityCode).parallelStream().forEach(hotel -> {
    		hotels.add(ResponseHotelDto.from(hotel, dateDiff));
    	});
    	
		return hotels;
	}
}
