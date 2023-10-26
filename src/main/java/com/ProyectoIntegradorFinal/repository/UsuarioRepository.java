package com.ProyectoIntegradorFinal.repository;

import com.ProyectoIntegradorFinal.entity.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository {
    Optional<Usuario> findByUsername(String username);
    @Query("select u from Usuario u where u.username = ?1")
    Optional<Usuario> getName(String username);
}
