package fr.acensi.jcom.service.impl;

import fr.acensi.jcom.service.ContactService;
import fr.acensi.jcom.domain.Contact;
import fr.acensi.jcom.repository.ContactRepository;
import fr.acensi.jcom.repository.search.ContactSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link Contact}.
 */
@Service
@Transactional
public class ContactServiceImpl implements ContactService {

    private final Logger log = LoggerFactory.getLogger(ContactServiceImpl.class);

    private final ContactRepository contactRepository;

    private final ContactSearchRepository contactSearchRepository;

    public ContactServiceImpl(ContactRepository contactRepository, ContactSearchRepository contactSearchRepository) {
        this.contactRepository = contactRepository;
        this.contactSearchRepository = contactSearchRepository;
    }

    /**
     * Save a contact.
     *
     * @param contact the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Contact save(Contact contact) {
        log.debug("Request to save Contact : {}", contact);
        Contact result = contactRepository.save(contact);
        contactSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the contacts.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Contact> findAll(Pageable pageable) {
        log.debug("Request to get all Contacts");
        return contactRepository.findAll(pageable);
    }

    /**
     * Get one contact by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Contact> findOne(Long id) {
        log.debug("Request to get Contact : {}", id);
        return contactRepository.findById(id);
    }

    /**
     * Delete the contact by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Contact : {}", id);
        contactRepository.deleteById(id);
        contactSearchRepository.deleteById(id);
    }

    /**
     * Search for the contact corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Contact> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Contacts for query {}", query);
        return contactSearchRepository.search(queryStringQuery(query), pageable);    }
}
