package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class VacancyEntityServiceTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var teacherService: TeacherService,
    var schoolService: SchoolService,
    var vacancyRepository: VacancyRepository,
    var vacancyService: VacancyService,
) {


    @Disabled
    @Test
    fun shoulSaveVacancy() {

        val a1 = Address("street1", "city", "1234")

        schoolService.addSchool(School("name"))
        teacherService.addTeacher(Teacher("lehrer 1", address = a1))

        val school = schoolService.schoolRepository.findAll()[0]
        val teacher = teacherRepository.findAll()[0]

        vacancyService.save(Vacancy(school))

        val id = vacancyRepository.findAll()[0].id!!
        vacancyService.addTeacher(id, teacher.id!!)

        teacherRepository
            .findAll()[0]
            .let {
                assertEquals(1, it.vacancies.size)
                assertEquals(1, it.vacancies.toList()[0].id)
            }

        schoolService.schoolRepository.findAll()[0].let {
            assertEquals(1, it.vacancies.size)
        }

        vacancyRepository
            .findAll()
            .let {
                assertEquals(1, it.size)
                assertEquals(1, it[0].teachers.size)
                assertEquals(1, it[0].school.id)
            }


    }


}