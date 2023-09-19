package com.crusty.stars.webshop.api;

import com.crusty.stars.webshop.model.Users;
import com.crusty.stars.webshop.model.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserEndPoint {
    private final UserRepository userRepository;

    public UserEndPoint(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping
    List<Users> finAll(){
        return userRepository.findAll();
    }
    @GetMapping("/name/{name}")
    Users findByName(@PathVariable String name) throws UserNotFoundException {
        return userRepository.findByName(name)
                .orElseThrow(UserNotFoundException::new);
    }
}
