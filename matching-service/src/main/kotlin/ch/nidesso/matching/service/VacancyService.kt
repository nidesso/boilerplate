package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service
import java.util.*

@Service
class VacancyService(
    val vacancyRepository: VacancyRepository,
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository
) {

    fun save(vacancy: Vacancy) {
        vacancyRepository.save(vacancy);
    }


    fun addTeacher(vacancyId: UUID, teacherId: UUID) {
        val vacancy = vacancyRepository.findById(vacancyId).get()
        val teacher = teacherRepository.findById(teacherId).get();

        vacancy.addTeacher(teacher)
        vacancyRepository.save(vacancy)
    }

}

