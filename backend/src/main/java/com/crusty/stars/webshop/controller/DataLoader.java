package com.crusty.stars.webshop.controller;


import com.crusty.stars.webshop.model.product.Product;
import com.crusty.stars.webshop.model.product.ProductRepository;
import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import java.util.Random;

@Controller
public class DataLoader implements ApplicationRunner {
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public DataLoader(UserRepository userRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // creating two Users
        userRepository.save(new User("Hamza", "password1"));
        userRepository.save(new User("Memo", "password1"));

        // Generate and insert 20 random products into the database
        for (int i = 1; i <= 20; i++) {
            Product product = new Product();
            product.setName("Product " + i);
            product.setDescription("Sample product " + i + " description");

            // Generate a random price between $10 and $100
            double price = 10 + (new Random().nextDouble() * 90);
            product.setPrice(price);

            productRepository.save(product);
        }
    }
}