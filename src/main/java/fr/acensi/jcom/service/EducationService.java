package fr.acensi.jcom.service;

import fr.acensi.jcom.domain.Education;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link Education}.
 */
public interface EducationService {

    /**
     * Save a education.
     *
     * @param education the entity to save.
     * @return the persisted entity.
     */
    Education save(Education education);

    /**
     * Get all the educations.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Education> findAll(Pageable pageable);

    /**
     * Get the "id" education.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Education> findOne(Long id);

    /**
     * Delete the "id" education.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

    /**
     * Search for the education corresponding to the query.
     *
     * @param query the query of the search.
     * 
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Education> search(String query, Pageable pageable);
}
