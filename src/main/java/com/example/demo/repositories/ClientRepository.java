package com.example.demo.repositories;

import com.example.demo.models.Clients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Clients, Long> {
    List<Clients> findByUserId(Long userId);
}
