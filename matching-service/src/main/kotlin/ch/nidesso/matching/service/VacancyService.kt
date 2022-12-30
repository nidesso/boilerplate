package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service

@Service
class VacancyService(
    val vacancyRepository: VacancyRepository,
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository
) {

    fun createVacancy(vacancy: Vacancy) {
        vacancy.school = schoolRepository.findById(vacancy.school.id!!).get();
        vacancyRepository.save(vacancy);
    }


    fun addTeacher(vacancyId: Long, teacherId: Long) {
        val vacancy = vacancyRepository.findById(vacancyId).get()
        val teacher = teacherRepository.findById(teacherId).get();

        vacancy.addTeacher(teacher)
        vacancyRepository.save(vacancy)
    }

}

