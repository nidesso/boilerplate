package ch.nidesso.matching.entity

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest


@DataJpaTest
class VacancyTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,
) {


    @Test
    fun testEntity() {
        val t1 = Teacher("t1")
        teacherRepository.save(t1)

        val school = School()
        schoolRepository.save(school)

        val vacancy = Vacancy(school)
        vacancy.addTeacher(t1)


        vacancyRepository.save(vacancy)
        //t1.vacancies.add(vacancy)

        assertEquals(1, vacancyRepository.findAll()[0].teachers.size)
        assertEquals(1, teacherRepository.findById(1).get().vacancies.size)
    }



}