package com.crusty.stars.webshop.populator;

import com.crusty.stars.webshop.model.User;
import com.crusty.stars.webshop.model.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
public class UserPopulator {
    @Bean
    ApplicationRunner populateUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            String password1 = passwordEncoder.encode("password1");
            User user1 = new User("Memo", password1, Set.of("ADMIN", "USER"));


            String password2 = passwordEncoder.encode("password1");
            User user2 = new User("Hamza", password2, Set.of("ADMIN", "USER"));

            userRepository.save(user1);
            userRepository.save(user2);
        };
    }
}
