package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @JsonBackReference
    private Clients client;

    public void setId(Long id) {
        this.id = id;
    }

    public void setClient(Clients client) {
        this.client = client;
    }
}