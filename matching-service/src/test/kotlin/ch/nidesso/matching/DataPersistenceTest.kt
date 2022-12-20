package ch.nidesso.matching

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager


@DataJpaTest
class DataPersistenceTest {
    @Autowired
    lateinit var entityManager: TestEntityManager

    @Autowired lateinit var teacherRepository: TeacherRepository;
    @Autowired lateinit var schoolRepository: SchoolRepository;
    @Autowired lateinit var vacancyRepository: VacancyRepository;



    @Test
    fun WhenFindById_thenReturnBankAccount() {
        val school = School("name");
        val teacher = Teacher("lehrer 1")



        entityManager.persist(school)
        entityManager.persist(teacher)
        entityManager.flush()



        val ingBankAccountFound = schoolRepository.findById(school.id!!).get()
        assertThat(ingBankAccountFound)
    }


}