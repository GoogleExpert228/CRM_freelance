package com.example.demo.controllers;

import com.example.demo.models.Users;
import com.example.demo.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return userService.createUser(user);
    }

    // Получение пользователя по id
    @GetMapping("/{id}")
    public Users getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    // Обновление пользователя
    @PutMapping
    public Users updateUser(@RequestBody Users user) {
        return userService.updateUser(user);
    }

    // Логин
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        boolean isAuthenticated = userService.login(username, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials!");
        }
    }

    // Получение id пользователя по имени
    @GetMapping("/username/{username}")
    public Long getIdByUsername(@PathVariable String username) {
        return userService.getIdByUsername(username);
    }
}