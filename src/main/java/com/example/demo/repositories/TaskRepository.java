package com.example.demo.repositories;

import com.example.demo.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Tasks, Long> {
    List<Tasks> findByClientId(Long clientId);
}
