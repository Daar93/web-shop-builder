package com.crusty.stars.webshop.controller;


import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

@Controller
public class DataLoader implements ApplicationRunner {
    private final UserRepository userRepository;
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        userRepository.save(new User("Hamza", "password1"));
        userRepository.save(new User("Memo", "password1"));
    }
}