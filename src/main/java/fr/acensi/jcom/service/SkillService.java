package fr.acensi.jcom.service;

import fr.acensi.jcom.domain.Skill;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link Skill}.
 */
public interface SkillService {

    /**
     * Save a skill.
     *
     * @param skill the entity to save.
     * @return the persisted entity.
     */
    Skill save(Skill skill);

    /**
     * Get all the skills.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Skill> findAll(Pageable pageable);

    /**
     * Get all the skills with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    Page<Skill> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Get the "id" skill.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Skill> findOne(Long id);

    /**
     * Delete the "id" skill.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

    /**
     * Search for the skill corresponding to the query.
     *
     * @param query the query of the search.
     * 
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Skill> search(String query, Pageable pageable);
}
