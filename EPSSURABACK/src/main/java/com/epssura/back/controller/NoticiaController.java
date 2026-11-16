package com.epssura.back.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.epssura.back.dto.NoticiaRequest;
import com.epssura.back.model.Noticia;
import com.epssura.back.service.NoticiaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/noticias")
public class NoticiaController {

    private final NoticiaService noticiaService;

    public NoticiaController(NoticiaService noticiaService) {
        this.noticiaService = noticiaService;
    }

    @GetMapping
    public List<Noticia> listar(@RequestParam(required = false) Long categoriaId,
                                @RequestParam(required = false) String q) {
        return noticiaService.listarPublicadas(categoriaId, q);
    }

    @GetMapping("/todas")
    public List<Noticia> listarTodas() {
        return noticiaService.listarTodas();
    }

    @GetMapping("/destacada")
    public ResponseEntity<Noticia> destacada() {
        return ResponseEntity.of(noticiaService.destacada());
    }

    @GetMapping("/{id}")
    public Noticia obtener(@PathVariable Long id) {
        return noticiaService.obtener(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Noticia crear(@Valid @RequestBody NoticiaRequest datos) {
        return noticiaService.crear(datos);
    }

    @PutMapping("/{id}")
    public Noticia actualizar(@PathVariable Long id, @Valid @RequestBody NoticiaRequest datos) {
        return noticiaService.actualizar(id, datos);
    }

    @PatchMapping("/{id}/publicar")
    public Noticia publicar(@PathVariable Long id) {
        return noticiaService.publicar(id);
    }

    @PatchMapping("/{id}/archivar")
    public Noticia archivar(@PathVariable Long id) {
        return noticiaService.archivar(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Long id) {
        noticiaService.eliminar(id);
    }
}
