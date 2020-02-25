package fr.acensi.jcom.repository.search;

import fr.acensi.jcom.domain.Education;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Education} entity.
 */
public interface EducationSearchRepository extends ElasticsearchRepository<Education, Long> {
}
