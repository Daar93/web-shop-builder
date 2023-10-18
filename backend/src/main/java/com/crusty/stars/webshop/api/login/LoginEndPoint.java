package com.crusty.stars.webshop.api.login;

import com.crusty.stars.webshop.service.JwtGenerator;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginEndPoint {
    private final JwtGenerator jwtGenerator;

    public LoginEndPoint(JwtGenerator jwtGenerator) {
        this.jwtGenerator = jwtGenerator;
    }

    @GetMapping
    public String jwt(Authentication authentication) {
        return jwtGenerator.generate(authentication);
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
