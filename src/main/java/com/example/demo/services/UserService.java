package com.example.demo.services;

import com.example.demo.models.Users;
import com.example.demo.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Users getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public Users updateUser(Users user) {
        return userRepository.save(user);
    }

    public Users createUser(Users user) {
        // Хешируем пароль перед сохранением
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Метод для логина
    public boolean login(String username, String password) {
        Users user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            // Если пароль совпал, возвращаем true
            return true;
        }
        // Если не совпало или пользователь не найден, возвращаем false
        return false;
    }

    public Long getIdByUsername(String username) {
        return userRepository.getIdByUsername(username);
    }

}