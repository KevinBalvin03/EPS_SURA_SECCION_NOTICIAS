package com.epssura.back.dto;

import java.util.Set;

import com.epssura.back.model.AlcanceNoticia;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record NoticiaRequest(
        @NotBlank @Size(max = 200) String titulo,
        @Size(max = 500) String resumen,
        String contenido,
        String imagenUrl,
        AlcanceNoticia alcance,
        Boolean destacada,
        @NotNull Long autorId,
        Set<Long> categoriaIds) {
}
