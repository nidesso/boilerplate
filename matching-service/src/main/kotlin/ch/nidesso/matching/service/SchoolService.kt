package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import org.springframework.stereotype.Service

@Service
class SchoolService(
    val addressRepository: AddressRepository,
    val teacherRepository: TeacherRepository,
    val schoolRepository: SchoolRepository,
) {

    fun save(school: School) {
        schoolRepository.save(school)
    }

    fun addAddress(schoolId: Long, address: Address){
        addressRepository.save(address)

        val school = schoolRepository.findById(schoolId).get()
        school.addresses.add(address);
        schoolRepository.save(school)
    }

    fun addTeacher(schoolId: Long, teacherId: Long) {
        val teacher = teacherRepository.findById(teacherId).get();
        val school = schoolRepository.findById(schoolId).get()

        school.teachers.add(teacher)
        schoolRepository.save(school)
    }

}

