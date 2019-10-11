package br.com.wac.exceptions;

public class HotelApiException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public HotelApiException(String message) {
		super(message);
	}
	
	public HotelApiException(Throwable cause) {
		super(cause);
	}
	
	public HotelApiException(Exception e) {
		super(e.getMessage(), e.getCause());
	}
	
	public HotelApiException(String message, Throwable cause) {
		super(message, cause);
	}
	
}
