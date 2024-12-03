package br.senac.tads.dsw.usuarios.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import br.senac.tads.dsw.usuarios.model.Usuario;
import br.senac.tads.dsw.usuarios.repository.UsuarioRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

@Autowired
private UsuarioRepository usuarioRepository;
 
    // Criar um novo usuário.
    @PostMapping
    public ResponseEntity<String> create(@RequestBody @Valid  Usuario usuario) {
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuario criado com sucesso");
    
    }
}
