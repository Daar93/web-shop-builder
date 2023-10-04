package com.crusty.stars.webshop.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "_User")
public class User {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String password;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public User() {
    }


    public void setName(String userName) {
        this.name = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}
