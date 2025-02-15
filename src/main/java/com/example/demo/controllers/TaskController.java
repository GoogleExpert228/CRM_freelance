package com.example.demo.controllers;

import com.example.demo.models.Tasks;
import com.example.demo.services.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/{userId}/clients/{clientId}/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Tasks> getTasksByClient(@PathVariable Long clientId) {
        return taskService.getTasksByClient(clientId);
    }

    @PostMapping
    public Tasks createTask(@PathVariable Long clientId, @RequestBody Tasks task) {
        return taskService.createTask(clientId, task);
    }

    @PutMapping("/{id}")
    public Tasks updateTask(@PathVariable Long id, @RequestBody Tasks task) {
        task.setId(id);
        return taskService.updateTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}