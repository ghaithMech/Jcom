package fr.acensi.jcom.repository;

import fr.acensi.jcom.domain.Skill;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Skill entity.
 */
@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

    @Query(value = "select distinct skill from Skill skill left join fetch skill.experiences",
        countQuery = "select count(distinct skill) from Skill skill")
    Page<Skill> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct skill from Skill skill left join fetch skill.experiences")
    List<Skill> findAllWithEagerRelationships();

    @Query("select skill from Skill skill left join fetch skill.experiences where skill.id =:id")
    Optional<Skill> findOneWithEagerRelationships(@Param("id") Long id);

}
