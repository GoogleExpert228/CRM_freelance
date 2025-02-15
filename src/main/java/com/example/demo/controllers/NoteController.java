package com.example.demo.controllers;

import com.example.demo.models.Notes;
import com.example.demo.services.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/{userId}/clients/{clientId}/notes")
public class NoteController {
    private final NoteService notesService;

    public NoteController(NoteService notesService) {
        this.notesService = notesService;
    }

    @GetMapping
    public List<Notes> getNotesByClient(@PathVariable Long clientId) {
        return notesService.getNotesByClient(clientId);
    }

    @PostMapping
    public Notes createNote(@PathVariable Long clientId, @RequestBody Notes note) {
        return notesService.createNote(clientId, note);
    }

    @PutMapping("/{id}")
    public Notes updateNote(@PathVariable Long id, @RequestBody Notes note) {
        note.setId(id);
        return notesService.updateNote(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        notesService.deleteNote(id);
    }
}