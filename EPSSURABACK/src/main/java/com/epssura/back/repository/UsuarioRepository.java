package com.epssura.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epssura.back.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
