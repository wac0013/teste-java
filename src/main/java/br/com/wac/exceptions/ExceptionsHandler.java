package br.com.wac.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.RestClientException;

public class ExceptionsHandler {

	@ExceptionHandler(RestClientException.class)
    public ResponseEntity<Object> handleException(RestClientException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Falha ao consultar API. \nDetalhes: " + ex.getMessage());
    }
	
	@ExceptionHandler(HotelApiException.class)
    public ResponseEntity<Object> handleException(HotelApiException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Falha na requisição. \nDetalhes: " + ex.getMessage());
    }
}
