package fr.acensi.jcom.service;

import fr.acensi.jcom.domain.Source;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link Source}.
 */
public interface SourceService {

    /**
     * Save a source.
     *
     * @param source the entity to save.
     * @return the persisted entity.
     */
    Source save(Source source);

    /**
     * Get all the sources.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Source> findAll(Pageable pageable);

    /**
     * Get the "id" source.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Source> findOne(Long id);

    /**
     * Delete the "id" source.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

    /**
     * Search for the source corresponding to the query.
     *
     * @param query the query of the search.
     * 
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Source> search(String query, Pageable pageable);
}
