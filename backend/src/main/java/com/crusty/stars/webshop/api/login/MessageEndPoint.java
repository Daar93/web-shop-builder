package com.crusty.stars.webshop.api.login;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("messages")
public class MessageEndPoint {
    @GetMapping("unauthorized")
    String unauthorized() {
        return "This will never be displayed due to lack of authorization";
    }

    @GetMapping("authorized")
    String authorized() {
        return "Hell how are you doing?";
    }
}
