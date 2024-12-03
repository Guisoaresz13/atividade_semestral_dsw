package br.senac.tads.dsw.usuarios.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import br.senac.tads.dsw.usuarios.model.Usuario;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin
public class UsuarioController {

    // Criar um novo usuário.
    public ResponseEntity<String> create(@Valid @RequestBody Usuario usuario) {
        return ResponseEntity.ok("Usuario criado com sucesso");
    }
}
