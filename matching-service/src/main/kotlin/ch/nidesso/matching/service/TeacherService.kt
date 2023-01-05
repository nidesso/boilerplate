package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class TeacherService(
    val addressRepository: AddressRepository,
    val vacancyRepository: VacancyRepository,
    val teacherRepository: TeacherRepository
) {

    fun addTeacher(teacher: Teacher) {
        addressRepository.save(teacher.address);
        teacherRepository.save(teacher);
    }
}

