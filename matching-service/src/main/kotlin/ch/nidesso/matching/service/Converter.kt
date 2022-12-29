package ch.nidesso.matching.service

import ch.nidesso.matching.dto.SchoolDTO
import ch.nidesso.matching.dto.TeacherDTO
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher


class Converter {

    fun toEntity(teacherDTO: TeacherDTO): Teacher {
        teacherDTO.let {
            return Teacher(
                name = it.name,
                lastname = it.lastname,
                phone = it.phone,
                email = it.email,
                id = it.id
            )
        }
    }

    fun toEntity(schoolDTO: SchoolDTO): School {
        schoolDTO.let {
            return School(
                name = it.name,
                id = it.id,
            )
        }
    }

}