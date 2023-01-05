package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class SchoolEntityServiceTest @Autowired constructor(
    var teacherService: TeacherService,
    var schoolService: SchoolService,
) {

    @Test
    fun shouldAddAddress() {
        val a1 = Address("street1", "city", "1234")

        schoolService.addSchool(School("name"))
        val school = schoolService.schoolRepository.findAll()[0]
        assertEquals(0, school.addresses.size)

        schoolService.addAddress(school.id!!, a1)

        val schools = schoolService.schoolRepository.findAll()
        assertEquals(1, schools[0].addresses.size)
    }

    @Test
    fun shouldAddTeacher() {
        val t1 = Teacher(
            "n1", "l2", address = Address("street1", "city", "1234")
        );

        val tid = teacherService.addTeacher(t1).id!!

        val s1 = School("name", teachers = mutableSetOf())
        val sid = schoolService.addSchool(s1).id!!

        schoolService.addTeacher(sid, tid)

        schoolService
            .schoolRepository
            .findById(sid).get().let {
                assertEquals(1, it.teachers.size)
            }
    }


}