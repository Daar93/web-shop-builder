package com.crusty.stars.webshop.api.product;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductNotFoundException extends Exception {

    public ProductNotFoundException(Long productId) {
        super("Product with ID " + productId + " not found");
    }
}
