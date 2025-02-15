package com.example.demo.repositories;

import com.example.demo.models.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Notes, Long> {
    List<Notes> findByClientId(Long clientId);
}
