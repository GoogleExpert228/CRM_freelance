package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @JsonBackReference
    private Clients client;

    public void setId(Long id) {
        this.id = id;
    }

    public void setClient(Clients client) {
        this.client = client;
    }
}