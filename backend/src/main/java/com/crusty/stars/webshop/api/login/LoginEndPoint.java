package com.crusty.stars.webshop.api.login;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginEndPoint {
    @GetMapping
    public String notAuthenticated() {
        return "Login credentials are wrong";
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
