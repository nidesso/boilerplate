package ch.nidesso.matching.dto

import ch.nidesso.matching.entity.Teacher
import java.util.*



data class TeacherDTO(
    val id: UUID?,

    val name: String,
    val lastname: String,
    val phone: String,
    val email: String,

    val address: AddressDTO
)

fun TeacherDTO.toEntity() = Teacher(
    name, lastname,
    phone, email,
    mutableSetOf(),
    address.toEntity(),
)

fun Teacher.toDto() = TeacherDTO(id!!, name, lastname, phone, email, address.toDto())