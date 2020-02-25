package fr.acensi.jcom.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link ExperienceSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ExperienceSearchRepositoryMockConfiguration {

    @MockBean
    private ExperienceSearchRepository mockExperienceSearchRepository;

}
