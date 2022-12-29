package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class VacancyServiceTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,
    var vacancyService: VacancyService,
) {


    @Test
    fun shouldCreateVacancy() {
        schoolRepository.save(School("name"));
        teacherRepository.save(Teacher("lehrer 1"))

        val school = schoolRepository.findAll()[0]
        val teacher = teacherRepository.findAll()[0]

        val vacancy = Vacancy(school)
        vacancyService.createVacancy(vacancy)

        val id = vacancyRepository.findAll()[0].id!!


        vacancyService.addTeacher(id, teacher.id!!)

        val vacancies = vacancyRepository.findAll()
        val teachers = teacherRepository.findAll()

        assertEquals(1, vacancies.size)

        assertEquals(1, vacancies[0].teachers.size)
        assertEquals(1, teachers[0].vacancies.size)
        assertEquals(1, teachers[0].vacancies.toList()[0].id)
    }


}