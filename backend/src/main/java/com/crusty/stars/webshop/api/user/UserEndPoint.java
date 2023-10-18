package com.crusty.stars.webshop.api.user;

import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserEndPoint {
    private final UserRepository userRepository;

    public UserEndPoint(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
//    public List<User> findAll(){
//        return userRepository.findAll();
//    }
    String notAuthenticated() {
        return "Hey there not authenticated";
    }

    @GetMapping("user")
    @Secured("ROLE_USER")
    String user() {
        return "Hey there User";
    }

    @GetMapping("admin")
    @Secured("ROLE_ADMIN")
    String admin() {
        return "Hey there Admin";
    }
//    @GetMapping("/{name}")
//    public User findByUsername(@PathVariable String name) throws UserNotFoundException {
//        return userRepository.findByUsername(name)
//                .orElseThrow(UserNotFoundException::new);
//    }

    @PostMapping("/")
    public User create(@RequestBody User user) {
        userRepository.save(new User(user.getUsername(), user.getPassword(), user.getAuthorities()));
        return user;
    }
//    @DeleteMapping("/{name}")
//    public User delete(@PathVariable String name) {
//        userRepository.delete();
//        return userRepository.findByName(name);
//    }
}
