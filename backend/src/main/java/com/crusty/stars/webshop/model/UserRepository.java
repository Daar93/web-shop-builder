package com.crusty.stars.webshop.model;

import com.crusty.stars.webshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAll();
    Optional<User> findByUsername(String name);
    User save(User user);
}
