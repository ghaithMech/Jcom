package fr.acensi.jcom.service.impl;

import fr.acensi.jcom.service.SourceService;
import fr.acensi.jcom.domain.Source;
import fr.acensi.jcom.repository.SourceRepository;
import fr.acensi.jcom.repository.search.SourceSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link Source}.
 */
@Service
@Transactional
public class SourceServiceImpl implements SourceService {

    private final Logger log = LoggerFactory.getLogger(SourceServiceImpl.class);

    private final SourceRepository sourceRepository;

    private final SourceSearchRepository sourceSearchRepository;

    public SourceServiceImpl(SourceRepository sourceRepository, SourceSearchRepository sourceSearchRepository) {
        this.sourceRepository = sourceRepository;
        this.sourceSearchRepository = sourceSearchRepository;
    }

    /**
     * Save a source.
     *
     * @param source the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Source save(Source source) {
        log.debug("Request to save Source : {}", source);
        Source result = sourceRepository.save(source);
        sourceSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the sources.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Source> findAll(Pageable pageable) {
        log.debug("Request to get all Sources");
        return sourceRepository.findAll(pageable);
    }

    /**
     * Get one source by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Source> findOne(Long id) {
        log.debug("Request to get Source : {}", id);
        return sourceRepository.findById(id);
    }

    /**
     * Delete the source by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Source : {}", id);
        sourceRepository.deleteById(id);
        sourceSearchRepository.deleteById(id);
    }

    /**
     * Search for the source corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Source> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Sources for query {}", query);
        return sourceSearchRepository.search(queryStringQuery(query), pageable);    }
}
