package com.crusty.stars.webshop.api.user;

import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserEndPoint {
    private final UserRepository userRepository;

    public UserEndPoint(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping
    public List<User> findAll(){
        return userRepository.findAll();
    }
    @GetMapping("/{name}")
    public User findByName(@PathVariable String name) throws UserNotFoundException {
        return userRepository.findByName(name)
                .orElseThrow(UserNotFoundException::new);
    }

    @PostMapping("/")
    public User create(@RequestBody User user) {
        userRepository.save(new User(user.getName(), user.getPassword()));
        return user;
    }

//    @DeleteMapping("/{name}")
//    public User delete(@PathVariable String name) {
//        userRepository.delete();
//        return userRepository.findByName(name);
//    }
}