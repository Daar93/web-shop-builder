package com.crusty.stars.webshop.api;

import com.crusty.stars.webshop.model.User;
import com.crusty.stars.webshop.model.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserEndPoint {
    private final UserRepository userRepository;

    public UserEndPoint(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping
    List<User> findAll(){
        return userRepository.findAll();
    }
    @GetMapping("/name/{name}")
    public User findByName(@PathVariable String name) throws UserNotFoundException {
        return userRepository.findByName(name)
                .orElseThrow(UserNotFoundException::new);
    }

    @PostMapping("/create")
    public User save(@RequestBody User newUser) {
        return userRepository.save(new User(newUser.getName(), newUser.getPassword()));
    }
}
