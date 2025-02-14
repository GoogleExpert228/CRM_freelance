package com.example.demo.repositories;

import com.example.demo.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Tasks, Long> { }
