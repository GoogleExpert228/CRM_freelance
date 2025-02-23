package com.example.demo.repositories;

import com.example.demo.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);

    // Получение только id пользователя по имени
    @Query("SELECT u.id FROM Users u WHERE u.username = :username")
    Long getIdByUsername(@Param("username") String username);
}