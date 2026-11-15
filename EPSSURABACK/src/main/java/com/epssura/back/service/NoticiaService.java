package com.epssura.back.service;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.epssura.back.dto.NoticiaRequest;
import com.epssura.back.model.AlcanceNoticia;
import com.epssura.back.model.Categoria;
import com.epssura.back.model.EstadoNoticia;
import com.epssura.back.model.Noticia;
import com.epssura.back.model.Usuario;
import com.epssura.back.repository.CategoriaRepository;
import com.epssura.back.repository.NoticiaRepository;
import com.epssura.back.repository.UsuarioRepository;

@Service
@Transactional
public class NoticiaService {

    private final NoticiaRepository noticiaRepository;
    private final CategoriaRepository categoriaRepository;
    private final UsuarioRepository usuarioRepository;

    public NoticiaService(NoticiaRepository noticiaRepository,
                          CategoriaRepository categoriaRepository,
                          UsuarioRepository usuarioRepository) {
        this.noticiaRepository = noticiaRepository;
        this.categoriaRepository = categoriaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    // Listado publico: solo PUBLICADAS, de la mas reciente a la mas antigua.
    @Transactional(readOnly = true)
    public List<Noticia> listarPublicadas(Long categoriaId, String q) {
        String patron = (q == null || q.isBlank()) ? "%" : "%" + q.trim().toLowerCase() + "%";
        return noticiaRepository.buscar(EstadoNoticia.PUBLICADA, categoriaId, patron);
    }

    // Listado de administracion: todas, sin importar el estado.
    @Transactional(readOnly = true)
    public List<Noticia> listarTodas() {
        return noticiaRepository.findAllByOrderByFechaCreacionDesc();
    }

    @Transactional(readOnly = true)
    public Optional<Noticia> destacada() {
        return noticiaRepository.findFirstByEstadoAndDestacadaTrueOrderByFechaPublicacionDesc(EstadoNoticia.PUBLICADA);
    }

    @Transactional(readOnly = true)
    public Noticia obtener(Long id) {
        return noticiaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Noticia no encontrada"));
    }

    // Toda noticia nueva nace como BORRADOR.
    public Noticia crear(NoticiaRequest datos) {
        Noticia noticia = new Noticia();
        aplicar(noticia, datos);
        return noticiaRepository.save(noticia);
    }

    public Noticia actualizar(Long id, NoticiaRequest datos) {
        Noticia noticia = obtener(id);
        aplicar(noticia, datos);
        return noticiaRepository.save(noticia);
    }

    public Noticia publicar(Long id) {
        Noticia noticia = obtener(id);
        noticia.setEstado(EstadoNoticia.PUBLICADA);
        if (noticia.getFechaPublicacion() == null) {
            noticia.setFechaPublicacion(LocalDateTime.now());
        }
        return noticiaRepository.save(noticia);
    }

    public Noticia archivar(Long id) {
        Noticia noticia = obtener(id);
        noticia.setEstado(EstadoNoticia.ARCHIVADA);
        return noticiaRepository.save(noticia);
    }

    public void eliminar(Long id) {
        noticiaRepository.delete(obtener(id));
    }

    private void aplicar(Noticia noticia, NoticiaRequest datos) {
        Usuario autor = usuarioRepository.findById(datos.autorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "El autor no existe"));

        Set<Long> ids = datos.categoriaIds() == null ? Set.of() : datos.categoriaIds();
        List<Categoria> categorias = categoriaRepository.findAllById(ids);
        if (categorias.size() != ids.size()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Alguna categoria no existe");
        }

        noticia.setTitulo(datos.titulo());
        noticia.setResumen(datos.resumen());
        noticia.setContenido(datos.contenido());
        noticia.setImagenUrl(datos.imagenUrl());
        noticia.setAlcance(datos.alcance() == null ? AlcanceNoticia.GENERAL : datos.alcance());
        noticia.setDestacada(Boolean.TRUE.equals(datos.destacada()));
        noticia.setAutor(autor);
        noticia.setCategorias(new LinkedHashSet<>(categorias));
    }
}
