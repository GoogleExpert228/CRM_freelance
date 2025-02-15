package com.example.demo.services;

import com.example.demo.models.Clients;
import com.example.demo.models.Users;
import com.example.demo.repositories.ClientRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClientService {
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;

    public ClientService(ClientRepository clientRepository, UserRepository userRepository) {
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
    }

    public List<Clients> getClientsByUserId(Long userId) {
        return clientRepository.findByUserId(userId);
    }

    public Clients getClient(Long id) {
        return clientRepository.findById(id).orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Clients createClient(Long userId, Clients client) {
        Users user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        client.setUser(user);
        return clientRepository.save(client);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
