package br.com.wac.dtos;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ResponseHotelDto {
	private Integer id;
	private String cityName;
	private List<ResponseRoomDto> rooms;
	
	private ResponseHotelDto() {}
	
	private static final BigDecimal COMMISSION = new BigDecimal(0.7);
	
	public static ResponseHotelDto from(HotelDto hotel, Long days) {
		ResponseHotelDto res = new ResponseHotelDto();
		
		res.id = hotel.getId();
		res.cityName = hotel.getCityName();
		res.rooms = new ArrayList<ResponseRoomDto>();
		
		hotel.getRooms().parallelStream().forEach(room -> {
			ResponseRoomDto resRoom = new ResponseRoomDto();
			resRoom.setCategoryName(room.getCategoryName());
			resRoom.setRoomID(room.getRoomID());
			
			ResponsePriceDto price = new ResponsePriceDto();
			price.setPricePerDayAdult(room.getPrice().getAdult().multiply(new BigDecimal(days)).multiply(COMMISSION));
			price.setPricePerDayChild(room.getPrice().getChild().multiply(new BigDecimal(days)).multiply(COMMISSION));
			
			resRoom.setPriceDetail(price);
			resRoom.setTotalPrice(price.getPricePerDayAdult().add(price.getPricePerDayChild()));
			
			res.rooms.add(resRoom);
		});
		
		return res;
	}
}
