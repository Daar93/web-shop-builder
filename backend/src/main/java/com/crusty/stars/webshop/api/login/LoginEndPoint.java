package com.crusty.stars.webshop.api.login;

import com.crusty.stars.webshop.api.user.UserNotFoundException;
import com.crusty.stars.webshop.model.LoginResponse;
import com.crusty.stars.webshop.model.user.User;
import com.crusty.stars.webshop.model.user.UserRepository;
import com.crusty.stars.webshop.service.JwtGenerator;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/login")
public class LoginEndPoint {
    private final JwtGenerator jwtGenerator;
    private final UserRepository userRepository;

    public LoginEndPoint(JwtGenerator jwtGenerator, UserRepository userRepository) {
        this.jwtGenerator = jwtGenerator;
        this.userRepository = userRepository;
    }

    @GetMapping
    public LoginResponse jwt(Authentication authentication)  {
        Optional<User> user = userRepository.findByUsername(authentication.getName());
        if (user.isPresent()) {
            return new LoginResponse(jwtGenerator.generate(authentication), user.get().getAuthorities());
        }

        throw new EntityNotFoundException();
    }

    @GetMapping("/user")
    @Secured("ROLE_USER")
    public String user() {
        return "HEy there user";
    }

    @GetMapping("/admin")
    @Secured("ROLE_ADMIN")
    public String admin() {
        return "HEy there admin";
    }
}
