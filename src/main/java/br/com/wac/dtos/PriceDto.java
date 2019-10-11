package br.com.wac.dtos;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.Data;

@Data
public class PriceDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private BigDecimal adult;
	private BigDecimal child;
}
