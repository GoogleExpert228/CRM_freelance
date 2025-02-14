package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tasks")
@Data
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;  // Название задачи

    @Column(columnDefinition = "TEXT")
    private String description;  // Описание задачи

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TaskStatus status;  // Статус задачи

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)  // Привязка к клиенту
    private Clients client;
}