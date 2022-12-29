package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service

@Service
class TeacherService(
    val addressRepository: AddressRepository,
    val vacancyRepository: VacancyRepository,
    val teacherRepository: TeacherRepository
) {

    fun save(teacher: Teacher) {
        addressRepository.save(teacher.address);
        teacherRepository.save(teacher);
    }


    fun addTeacher(vacancyId: Long, teacherId: Long) {
        val vacancy = vacancyRepository.findById(vacancyId).get()
        val teacher = teacherRepository.findById(teacherId).get();

        vacancy.addTeacher(teacher)
        vacancyRepository.save(vacancy)
    }

}

