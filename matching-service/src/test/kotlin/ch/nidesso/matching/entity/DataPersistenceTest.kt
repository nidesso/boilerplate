package ch.nidesso.matching.entity

import ch.nidesso.matching.service.AddressRepository
import ch.nidesso.matching.service.SchoolRepository
import ch.nidesso.matching.service.TeacherRepository
import ch.nidesso.matching.service.VacancyRepository
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest

@DataJpaTest
class DataPersistenceTest @Autowired constructor(
    var addressRepository: AddressRepository,
    var teacherRepository: TeacherRepository,
    var schoolRepository: SchoolRepository,
    var vacancyRepository: VacancyRepository,

    ) {


    @Test
    fun testEntity() {


        val a1 = Address("street1", "city", "1234")
        val a2 = Address("street2", "city", "1234")

        addressRepository.save(a1)


        val schoolEntity = School(
            name = "name", address = a1
        );
        val teacherEntity = Teacher(
            name = "lehrer 1", address = a2
        )

        schoolRepository.save(schoolEntity)
        teacherRepository.save(teacherEntity)


        val schools = schoolRepository.findAll()
        val teachers = teacherRepository.findAll()


        val vacancyEntity = Vacancy(schoolEntity, mutableSetOf(teacherEntity))
        vacancyRepository.save(vacancyEntity)


        assertEquals(1, schools.size)
        assertEquals(1, teachers.size)
        assertEquals(1, vacancyRepository.findAll().size)
    }
}