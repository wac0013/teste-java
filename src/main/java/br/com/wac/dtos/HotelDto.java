package br.com.wac.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class HotelDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String name;
	private Integer cityCode;
	private String cityName;
	private List<RoomDto> rooms;
}
