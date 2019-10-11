package br.com.wac.dtos;

import java.io.Serializable;

import lombok.Data;

@Data
public class RoomDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer roomID;
	private String categoryName;
	private PriceDto price;
}
