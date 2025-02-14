package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "notes")
@Data
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;  // Содержание заметки

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)  // Привязка к клиенту
    private Clients client;
}