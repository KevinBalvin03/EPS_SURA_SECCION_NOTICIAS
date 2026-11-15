package com.epssura.back.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.epssura.back.model.Categoria;
import com.epssura.back.repository.CategoriaRepository;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> listarActivas() {
        return categoriaRepository.findByActivaTrueOrderByNombreAsc();
    }
}
