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
class TeacherEntityServiceTest @Autowired constructor(
    var teacherService: TeacherService,
) {


    @Test
    fun shouldAddTeacher() {
        val a1 = Address("street1", "city", "1234")
        val teacher = Teacher("k1", "l1", "", "", mutableSetOf(), address = a1)

        val tid = teacherService.addTeacher(teacher).id!!

        teacherService.teacherRepository
            .findById(tid)
            .get()
            .let {
                assertEquals("k1", it.name)
                assertEquals("l1", it.lastname)
                assertEquals("street1", it.address.street)
            }
    }


}