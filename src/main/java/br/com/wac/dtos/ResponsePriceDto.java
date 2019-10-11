package br.com.wac.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class ResponsePriceDto {
	private BigDecimal pricePerDayAdult;
	private BigDecimal pricePerDayChild;
}
