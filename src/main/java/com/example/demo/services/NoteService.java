package com.example.demo.services;

import com.example.demo.models.Clients;
import com.example.demo.models.Notes;
import com.example.demo.repositories.ClientRepository;
import com.example.demo.repositories.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    private final NoteRepository notesRepository;
    private final ClientRepository clientRepository;

    public NoteService(NoteRepository notesRepository, ClientRepository clientRepository) {
        this.notesRepository = notesRepository;
        this.clientRepository = clientRepository;
    }

    public List<Notes> getNotesByClient(Long clientId) {
        return notesRepository.findByClientId(clientId);
    }

    public Notes createNote(Long clientId, Notes note) {
        Clients client = clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        note.setClient(client);
        return notesRepository.save(note);
    }

    public Notes updateNote(Notes note) {
        return notesRepository.save(note);
    }

    public void deleteNote(Long id) {
        notesRepository.deleteById(id);
    }
}