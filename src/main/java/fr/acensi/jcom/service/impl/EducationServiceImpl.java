package fr.acensi.jcom.service.impl;

import fr.acensi.jcom.service.EducationService;
import fr.acensi.jcom.domain.Education;
import fr.acensi.jcom.repository.EducationRepository;
import fr.acensi.jcom.repository.search.EducationSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link Education}.
 */
@Service
@Transactional
public class EducationServiceImpl implements EducationService {

    private final Logger log = LoggerFactory.getLogger(EducationServiceImpl.class);

    private final EducationRepository educationRepository;

    private final EducationSearchRepository educationSearchRepository;

    public EducationServiceImpl(EducationRepository educationRepository, EducationSearchRepository educationSearchRepository) {
        this.educationRepository = educationRepository;
        this.educationSearchRepository = educationSearchRepository;
    }

    /**
     * Save a education.
     *
     * @param education the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Education save(Education education) {
        log.debug("Request to save Education : {}", education);
        Education result = educationRepository.save(education);
        educationSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the educations.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Education> findAll(Pageable pageable) {
        log.debug("Request to get all Educations");
        return educationRepository.findAll(pageable);
    }

    /**
     * Get one education by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Education> findOne(Long id) {
        log.debug("Request to get Education : {}", id);
        return educationRepository.findById(id);
    }

    /**
     * Delete the education by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Education : {}", id);
        educationRepository.deleteById(id);
        educationSearchRepository.deleteById(id);
    }

    /**
     * Search for the education corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Education> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Educations for query {}", query);
        return educationSearchRepository.search(queryStringQuery(query), pageable);    }
}
