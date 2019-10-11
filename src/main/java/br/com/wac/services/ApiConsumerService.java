package br.com.wac.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import br.com.wac.dtos.HotelDto;

@Service
public class ApiConsumerService {
	
	@Value("${api.url}")
	private String apiUrl;
	
	public List<HotelDto> getHotelsByCity(Integer cityId) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<List<HotelDto>> response = restTemplate.exchange(
				apiUrl + "hotels/avail/" + cityId,
				HttpMethod.GET,
				null,
				new ParameterizedTypeReference<List<HotelDto>>() {});
		
		List<HotelDto> hotels = response.getBody();		
		return hotels;		
	}
	
	public HotelDto getHotelById(Integer hotelId) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<HotelDto> response = restTemplate.exchange(
				apiUrl + "hotels/" + hotelId,
				HttpMethod.GET,
				null,
				new ParameterizedTypeReference<HotelDto>() {});
		
		HotelDto hotel = response.getBody();		
		return hotel;	
	}
}
