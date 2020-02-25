package fr.acensi.jcom.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.FieldType;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Skill.
 */
@Entity
@Table(name = "skill")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "skill")
public class Skill implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "family")
    private String family;

    @Column(name = "domain")
    private String domain;

    @Column(name = "nature")
    private String nature;

    @Column(name = "name")
    private String name;

    @Column(name = "search_word")
    private String searchWord;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "skill_experience",
               joinColumns = @JoinColumn(name = "skill_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "experience_id", referencedColumnName = "id"))
    private Set<Experience> experiences = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFamily() {
        return family;
    }

    public Skill family(String family) {
        this.family = family;
        return this;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getDomain() {
        return domain;
    }

    public Skill domain(String domain) {
        this.domain = domain;
        return this;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getNature() {
        return nature;
    }

    public Skill nature(String nature) {
        this.nature = nature;
        return this;
    }

    public void setNature(String nature) {
        this.nature = nature;
    }

    public String getName() {
        return name;
    }

    public Skill name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSearchWord() {
        return searchWord;
    }

    public Skill searchWord(String searchWord) {
        this.searchWord = searchWord;
        return this;
    }

    public void setSearchWord(String searchWord) {
        this.searchWord = searchWord;
    }

    public Set<Experience> getExperiences() {
        return experiences;
    }

    public Skill experiences(Set<Experience> experiences) {
        this.experiences = experiences;
        return this;
    }

    public Skill addExperience(Experience experience) {
        this.experiences.add(experience);
        experience.getSkills().add(this);
        return this;
    }

    public Skill removeExperience(Experience experience) {
        this.experiences.remove(experience);
        experience.getSkills().remove(this);
        return this;
    }

    public void setExperiences(Set<Experience> experiences) {
        this.experiences = experiences;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Skill)) {
            return false;
        }
        return id != null && id.equals(((Skill) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Skill{" +
            "id=" + getId() +
            ", family='" + getFamily() + "'" +
            ", domain='" + getDomain() + "'" +
            ", nature='" + getNature() + "'" +
            ", name='" + getName() + "'" +
            ", searchWord='" + getSearchWord() + "'" +
            "}";
    }
}
