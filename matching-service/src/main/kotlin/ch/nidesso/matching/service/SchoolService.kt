package ch.nidesso.matching.service

import ch.nidesso.matching.dto.CreateSchoolDTO
import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import org.hibernate.validator.cfg.defs.UUIDDef
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class SchoolService(
    val addressRepository: AddressRepository,
    val teacherRepository: TeacherRepository,
    val schoolRepository: SchoolRepository,
) {


    fun addSchool(school: School){
        schoolRepository.save(school)
    }

    fun addAddress(schoolId: UUID, address: Address){
        addressRepository.save(address)

        val school = schoolRepository.findById(schoolId).get()
        school.addresses.add(address);
        schoolRepository.save(school)
    }



    fun addTeacher(schoolId: UUID, teacherId: UUID) {
        val teacher = teacherRepository.findById(teacherId).get();
        val school = schoolRepository.findById(schoolId).get()

        school.teachers.add(teacher)
        schoolRepository.save(school)
    }


    fun remove(schoolId: UUID){
        schoolRepository.deleteById(schoolId)
    }

}

