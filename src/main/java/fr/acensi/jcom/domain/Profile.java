package fr.acensi.jcom.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.FieldType;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Profile.
 */
@Entity
@Table(name = "profile")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "profile")
public class Profile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "birthday")
    private Instant birthday;

    @Column(name = "residance")
    private String residance;

    @Column(name = "hire_date")
    private Instant hireDate;

    @Column(name = "salary")
    private Long salary;

    @Column(name = "status")
    private String status;

    @Column(name = "total_xp")
    private Integer totalXp;

    @Column(name = "desired_position")
    private String desiredPosition;

    @Lob
    @Column(name = "photo")
    private byte[] photo;

    @Column(name = "photo_content_type")
    private String photoContentType;

    @Column(name = "mobility")
    private String mobility;

    @Column(name = "driver")
    private Boolean driver;

    @Column(name = "seen")
    private Boolean seen;

    @Column(name = "summary")
    private String summary;

    @Column(name = "external")
    private Boolean external;

    @OneToMany(mappedBy = "profile")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Contact> contacts = new HashSet<>();

    @OneToMany(mappedBy = "profile")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Education> educations = new HashSet<>();

    @OneToMany(mappedBy = "profile")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Experience> experiences = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public Profile firstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public Profile lastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public Profile email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public Profile phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Instant getBirthday() {
        return birthday;
    }

    public Profile birthday(Instant birthday) {
        this.birthday = birthday;
        return this;
    }

    public void setBirthday(Instant birthday) {
        this.birthday = birthday;
    }

    public String getResidance() {
        return residance;
    }

    public Profile residance(String residance) {
        this.residance = residance;
        return this;
    }

    public void setResidance(String residance) {
        this.residance = residance;
    }

    public Instant getHireDate() {
        return hireDate;
    }

    public Profile hireDate(Instant hireDate) {
        this.hireDate = hireDate;
        return this;
    }

    public void setHireDate(Instant hireDate) {
        this.hireDate = hireDate;
    }

    public Long getSalary() {
        return salary;
    }

    public Profile salary(Long salary) {
        this.salary = salary;
        return this;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public String getStatus() {
        return status;
    }

    public Profile status(String status) {
        this.status = status;
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getTotalXp() {
        return totalXp;
    }

    public Profile totalXp(Integer totalXp) {
        this.totalXp = totalXp;
        return this;
    }

    public void setTotalXp(Integer totalXp) {
        this.totalXp = totalXp;
    }

    public String getDesiredPosition() {
        return desiredPosition;
    }

    public Profile desiredPosition(String desiredPosition) {
        this.desiredPosition = desiredPosition;
        return this;
    }

    public void setDesiredPosition(String desiredPosition) {
        this.desiredPosition = desiredPosition;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public Profile photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public Profile photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public String getMobility() {
        return mobility;
    }

    public Profile mobility(String mobility) {
        this.mobility = mobility;
        return this;
    }

    public void setMobility(String mobility) {
        this.mobility = mobility;
    }

    public Boolean isDriver() {
        return driver;
    }

    public Profile driver(Boolean driver) {
        this.driver = driver;
        return this;
    }

    public void setDriver(Boolean driver) {
        this.driver = driver;
    }

    public Boolean isSeen() {
        return seen;
    }

    public Profile seen(Boolean seen) {
        this.seen = seen;
        return this;
    }

    public void setSeen(Boolean seen) {
        this.seen = seen;
    }

    public String getSummary() {
        return summary;
    }

    public Profile summary(String summary) {
        this.summary = summary;
        return this;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Boolean isExternal() {
        return external;
    }

    public Profile external(Boolean external) {
        this.external = external;
        return this;
    }

    public void setExternal(Boolean external) {
        this.external = external;
    }

    public Set<Contact> getContacts() {
        return contacts;
    }

    public Profile contacts(Set<Contact> contacts) {
        this.contacts = contacts;
        return this;
    }

    public Profile addContact(Contact contact) {
        this.contacts.add(contact);
        contact.setProfile(this);
        return this;
    }

    public Profile removeContact(Contact contact) {
        this.contacts.remove(contact);
        contact.setProfile(null);
        return this;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

    public Set<Education> getEducations() {
        return educations;
    }

    public Profile educations(Set<Education> educations) {
        this.educations = educations;
        return this;
    }

    public Profile addEducation(Education education) {
        this.educations.add(education);
        education.setProfile(this);
        return this;
    }

    public Profile removeEducation(Education education) {
        this.educations.remove(education);
        education.setProfile(null);
        return this;
    }

    public void setEducations(Set<Education> educations) {
        this.educations = educations;
    }

    public Set<Experience> getExperiences() {
        return experiences;
    }

    public Profile experiences(Set<Experience> experiences) {
        this.experiences = experiences;
        return this;
    }

    public Profile addExperience(Experience experience) {
        this.experiences.add(experience);
        experience.setProfile(this);
        return this;
    }

    public Profile removeExperience(Experience experience) {
        this.experiences.remove(experience);
        experience.setProfile(null);
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
        if (!(o instanceof Profile)) {
            return false;
        }
        return id != null && id.equals(((Profile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Profile{" +
            "id=" + getId() +
            ", firstname='" + getFirstname() + "'" +
            ", lastname='" + getLastname() + "'" +
            ", email='" + getEmail() + "'" +
            ", phone='" + getPhone() + "'" +
            ", birthday='" + getBirthday() + "'" +
            ", residance='" + getResidance() + "'" +
            ", hireDate='" + getHireDate() + "'" +
            ", salary=" + getSalary() +
            ", status='" + getStatus() + "'" +
            ", totalXp=" + getTotalXp() +
            ", desiredPosition='" + getDesiredPosition() + "'" +
            ", photo='" + getPhoto() + "'" +
            ", photoContentType='" + getPhotoContentType() + "'" +
            ", mobility='" + getMobility() + "'" +
            ", driver='" + isDriver() + "'" +
            ", seen='" + isSeen() + "'" +
            ", summary='" + getSummary() + "'" +
            ", external='" + isExternal() + "'" +
            "}";
    }
}
