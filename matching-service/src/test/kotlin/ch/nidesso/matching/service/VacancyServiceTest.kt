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
        val school = School("name");
        val teacher = Teacher("lehrer 1")


        vacancyService.schoolRepository.save(school);
        vacancyService.teacherRepository.save(teacher)

        val vacancy = Vacancy(school)
        vacancyService.createVacancy(vacancy)


        val id = vacancyRepository.findAll()[0].id
        vacancyService.addTeacher(id!!, teacher)


        val results2 = vacancyService.vacancyRepository.findAll()

        assertEquals(1, results2.size)
        assertEquals(1, results2[0].teachers.size)


    }


}