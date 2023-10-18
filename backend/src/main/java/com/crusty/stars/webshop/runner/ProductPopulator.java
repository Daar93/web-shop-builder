package com.crusty.stars.webshop.runner;

import com.crusty.stars.webshop.model.product.Product;
import com.crusty.stars.webshop.model.product.ProductRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Random;

@Configuration
public class ProductPopulator {
    @Bean
    ApplicationRunner populateProducts(ProductRepository productRepository) {
        return args -> {
            for (int i = 1; i <= 20; i++) {
                Product product = new Product();
                product.setName("Product " + i);
                product.setDescription("Sample product " + i + " description");

                // Generate a random price between $10 and $100
                double price = 10 + (new Random().nextDouble() * 90);
                product.setPrice(price);

                productRepository.save(product);
            }
        };
    }
}
