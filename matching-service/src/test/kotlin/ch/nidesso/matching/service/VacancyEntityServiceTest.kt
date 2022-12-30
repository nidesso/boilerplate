package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class VacancyEntityServiceTest @Autowired constructor(
    var teacherRepository: TeacherRepository,
    var addressRepository: AddressRepository,
    var teacherService: TeacherService,
    var schoolService: SchoolService,
    var vacancyRepository: VacancyRepository,
    var vacancyService: VacancyService,
) {


    @Test
    fun shouldCreateVacancy() {

        val a1 = Address("street1", "city", "1234")

        schoolService.save(School("name"))
        teacherService.save(Teacher("lehrer 1", address = a1))


        val school = schoolService.schoolRepository.findAll()[0]
        val teacher = teacherRepository.findAll()[0]
        val vacancyEntity = Vacancy(school)

        vacancyService.createVacancy(vacancyEntity)

        val id = vacancyRepository.findAll()[0].id!!

        vacancyService.addTeacher(id, teacher.id!!)

        val vacancies = vacancyRepository.findAll()
        val teachers = teacherRepository.findAll()
        val schools = schoolService.schoolRepository.findAll()

        assertEquals(1, vacancies.size)
        assertEquals(1, vacancies[0].teachers.size)
        assertEquals(1, vacancies[0].school.id)

        assertEquals(1, teachers[0].vacancies.size)
        assertEquals(1, teachers[0].vacancies.toList()[0].id)
        assertEquals(1, schools[0].vacancies.size)
    }


}