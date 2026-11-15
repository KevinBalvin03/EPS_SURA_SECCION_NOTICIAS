package com.epssura.back.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.epssura.back.model.EstadoNoticia;
import com.epssura.back.model.Noticia;

public interface NoticiaRepository extends JpaRepository<Noticia, Long> {

    // Listado por estado, con filtro opcional por categoria y busqueda en titulo y resumen.
    // "patron" llega ya en minusculas y con comodines, por ejemplo "%sede%" (o "%" para no filtrar).
    @Query("""
            select distinct n from Noticia n
            left join n.categorias c
            where n.estado = :estado
              and (:categoriaId is null or c.id = :categoriaId)
              and (lower(n.titulo) like :patron or lower(n.resumen) like :patron)
            order by n.fechaPublicacion desc
            """)
    List<Noticia> buscar(@Param("estado") EstadoNoticia estado,
                         @Param("categoriaId") Long categoriaId,
                         @Param("patron") String patron);

    Optional<Noticia> findFirstByEstadoAndDestacadaTrueOrderByFechaPublicacionDesc(EstadoNoticia estado);

    List<Noticia> findAllByOrderByFechaCreacionDesc();
}
