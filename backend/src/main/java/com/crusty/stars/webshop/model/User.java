package com.crusty.stars.webshop.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "_User")
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String username;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> authorities;

    public User(String username, String password, Set<String> authorities) {
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public User() {
    }

    public <E> User(int i, String hamza, String password1, Set<E> admin) {
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
