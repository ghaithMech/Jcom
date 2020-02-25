package fr.acensi.jcom.repository.search;

import fr.acensi.jcom.domain.Source;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Source} entity.
 */
public interface SourceSearchRepository extends ElasticsearchRepository<Source, Long> {
}
