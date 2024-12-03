package br.senac.tads.dsw.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.senac.tads.dsw.usuarios.model.Usuario;

    
    public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    }

