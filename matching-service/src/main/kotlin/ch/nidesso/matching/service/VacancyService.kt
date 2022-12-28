package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*
import org.springframework.stereotype.Service

@Service
class VacancyService(
    val vacancyRepository: VacancyRepository,
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository
) {

    fun createVacancy(vacancy: Vacancy) {
        val school = schoolRepository.findById(vacancy.school.id!!).get()
        vacancy.school = school;
        vacancyRepository.save(vacancy);
    }


    fun addTeacher(id: Long, teacher: Teacher) {
        val teacherEntity = teacherRepository.findById(teacher.id!!).get();
        val vacancy = vacancyRepository.findById(id).get()
        vacancy.addTeacher(teacherEntity)

        vacancyRepository.save(vacancy);
    }

}

