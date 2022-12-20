package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class VacancyServiceTest @Autowired constructor(
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,
    var vacancyService: VacancyService,
) {


    @Test
    fun shouldCreateVacancy() {
        val school = School("name");
        schoolRepository.save(school);

        //val teacher = Teacher("lehrer 1")
        val vacancy = Vacancy(school)

        vacancyService.createVacancy(vacancy)

        val results = vacancyRepository.findAll()

        assertEquals(1, results.size)
    }


}