package com.crusty.stars.webshop.populator;

import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
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
//            user1.setUsername("Memo");
//            user1.setPassword(passwordEncoder.encode("password1"));
//            user1.setAuthorities(Set.of("ADMIN", "USER"));

            String password2 = passwordEncoder.encode("password1");
            User user2 = new User("Hamza", password2, Set.of("ADMIN", "USER"));
//            user2.setUsername("Hamza");
//            user2.setPassword(passwordEncoder.encode("password1"));
//            user2.setAuthorities(Set.of("ADMIN", "USER"));

            userRepository.save(user1);
            userRepository.save(user2);
        };
    }
}
