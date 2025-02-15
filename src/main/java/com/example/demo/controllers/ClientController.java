package com.example.demo.controllers;

import com.example.demo.models.Clients;
import com.example.demo.services.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/{userId}/clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Clients> getClients(@PathVariable Long userId) {
        return clientService.getClientsByUserId(userId);
    }

    @GetMapping("/{id}")
    public Clients getClient(@PathVariable Long id) {
        return clientService.getClient(id);
    }

    @PostMapping
    public Clients createClient(@PathVariable Long userId, @RequestBody Clients client) {
        return clientService.createClient(userId, client);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }
}