package com.crusty.stars.webshop.model;

import java.util.Set;

public record LoginResponse(String jwtToken, Set<String> authorities) {
}
