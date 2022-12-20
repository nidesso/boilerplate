package ch.nidesso.matching.entity

import ch.nidesso.matching.entity.*
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
@DataJpaTest
class DataPersistenceTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,
) {


    @Test
    fun testEntity() {

        val school = School("name");
        val teacher = Teacher("lehrer 1")


        schoolRepository.save(school)
        teacherRepository.save(teacher)

        val schools = schoolRepository.findAll()
        val teachers = teacherRepository.findAll()


        val vacancy = Vacancy(school, mutableSetOf(teacher))
        vacancyRepository.save(vacancy)


        assertEquals(1, schools.size)
        assertEquals(1, teachers.size)
        assertEquals(1,vacancyRepository.findAll().size)
    }


}