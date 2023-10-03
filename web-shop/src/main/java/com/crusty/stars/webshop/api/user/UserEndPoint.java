package com.crusty.stars.webshop.api.user;

import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import org.springframework.web.bind.annotation.*;

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
