package com.example.demo.services;

import com.example.demo.models.Clients;
import com.example.demo.models.Tasks;
import com.example.demo.repositories.ClientRepository;
import com.example.demo.repositories.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final ClientRepository clientRepository;

    public TaskService(TaskRepository taskRepository, ClientRepository clientRepository) {
        this.taskRepository = taskRepository;
        this.clientRepository = clientRepository;
    }

    public List<Tasks> getTasksByClient(Long clientId) {
        return taskRepository.findByClientId(clientId);
    }

    public Tasks createTask(Long clientId, Tasks task) {
        Clients client = clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        task.setClient(client);
        return taskRepository.save(task);
    }
    public Tasks updateTask(Tasks task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}