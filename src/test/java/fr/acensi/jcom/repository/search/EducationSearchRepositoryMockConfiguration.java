package fr.acensi.jcom.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link EducationSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class EducationSearchRepositoryMockConfiguration {

    @MockBean
    private EducationSearchRepository mockEducationSearchRepository;

}
