package com.crusty.stars.webshop.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Users {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String password;
    private LocalDate birthDate;

    public void setName(String userName) {
        this.name = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
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

    public LocalDate getBirthDate() {
        return birthDate;
    }
}
