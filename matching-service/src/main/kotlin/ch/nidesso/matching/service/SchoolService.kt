package ch.nidesso.matching.service

import ch.nidesso.matching.boundary.rest.TeacherResource
import ch.nidesso.matching.entity.SchoolRepository
import ch.nidesso.matching.entity.TeacherRepository
import ch.nidesso.matching.entity.Vacancy
import ch.nidesso.matching.entity.VacancyRepository
import org.apache.juli.logging.Log
import org.springframework.stereotype.Service

@Service
class SchoolService(
    val teacherRepository: TeacherRepository,
    val schoolRepository: SchoolRepository,
) {


    fun addTeacher(schoolId: Long, teacherId: Long) {
        val teacher = teacherRepository.findById(teacherId).get();
        val school = schoolRepository.findById(schoolId).get()

        school.teachers.add(teacher)
        schoolRepository.save(school)
    }

}

