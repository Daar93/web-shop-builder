package com.crusty.stars.webshop.populator;

import com.crusty.stars.webshop.model.Product;
import com.crusty.stars.webshop.model.ProductRepository;
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
                product.setPrice(generateRandomPriceBetween10And90());

                productRepository.save(product);
            }
        };
    }

    private double generateRandomPriceBetween10And90() {
        return 10 + (new Random().nextDouble() * 90);
    }
}
