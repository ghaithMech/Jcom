package fr.acensi.jcom.service.impl;

import fr.acensi.jcom.service.ExperienceService;
import fr.acensi.jcom.domain.Experience;
import fr.acensi.jcom.repository.ExperienceRepository;
import fr.acensi.jcom.repository.search.ExperienceSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link Experience}.
 */
@Service
@Transactional
public class ExperienceServiceImpl implements ExperienceService {

    private final Logger log = LoggerFactory.getLogger(ExperienceServiceImpl.class);

    private final ExperienceRepository experienceRepository;

    private final ExperienceSearchRepository experienceSearchRepository;

    public ExperienceServiceImpl(ExperienceRepository experienceRepository, ExperienceSearchRepository experienceSearchRepository) {
        this.experienceRepository = experienceRepository;
        this.experienceSearchRepository = experienceSearchRepository;
    }

    /**
     * Save a experience.
     *
     * @param experience the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Experience save(Experience experience) {
        log.debug("Request to save Experience : {}", experience);
        Experience result = experienceRepository.save(experience);
        experienceSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the experiences.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Experience> findAll(Pageable pageable) {
        log.debug("Request to get all Experiences");
        return experienceRepository.findAll(pageable);
    }

    /**
     * Get one experience by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Experience> findOne(Long id) {
        log.debug("Request to get Experience : {}", id);
        return experienceRepository.findById(id);
    }

    /**
     * Delete the experience by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Experience : {}", id);
        experienceRepository.deleteById(id);
        experienceSearchRepository.deleteById(id);
    }

    /**
     * Search for the experience corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Experience> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Experiences for query {}", query);
        return experienceSearchRepository.search(queryStringQuery(query), pageable);    }
}
