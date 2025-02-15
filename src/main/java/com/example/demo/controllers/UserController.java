package com.example.demo.controllers;

import com.example.demo.models.Users;
import com.example.demo.services.UserService;
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

    @GetMapping("/{id}")
    public Users getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PutMapping
    public Users updateUser(@RequestBody Users user) {
        return userService.updateUser(user);
    }
}