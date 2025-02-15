package com.example.demo.services;

import com.example.demo.models.Users;
import com.example.demo.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public Users updateUser(Users user) {
        return userRepository.save(user);
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }
}