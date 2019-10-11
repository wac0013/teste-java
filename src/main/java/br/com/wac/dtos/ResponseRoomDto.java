package br.com.wac.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class ResponseRoomDto {
	private Integer roomID;
	private String categoryName;
	private BigDecimal totalPrice;
	private ResponsePriceDto priceDetail;
}
