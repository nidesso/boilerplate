package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class TeacherService(
    val addressRepository: AddressRepository,
    val teacherRepository: TeacherRepository
) {
    fun addTeacher(teacher: Teacher): Teacher {
        if (teacher.id != null && teacherRepository.existsById(teacher.id)) return teacher


        addressRepository.save(teacher.address);
        return teacherRepository.save(teacher);
    }
}

