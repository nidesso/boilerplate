package ch.nidesso.matching.entity

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest

@DataJpaTest
class DataPersistenceTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,
) {


    @Test
    fun testEntity() {

        val schoolEntity = School("name");
        val teacherEntity = Teacher("lehrer 1")


        schoolRepository.save(schoolEntity)
        teacherRepository.save(teacherEntity)

        val schools = schoolRepository.findAll()
        val teachers = teacherRepository.findAll()


        val vacancyEntity = Vacancy(schoolEntity, mutableSetOf(teacherEntity))
        vacancyRepository.save(vacancyEntity)


        assertEquals(1, schools.size)
        assertEquals(1, teachers.size)
        assertEquals(1,vacancyRepository.findAll().size)
    }
}