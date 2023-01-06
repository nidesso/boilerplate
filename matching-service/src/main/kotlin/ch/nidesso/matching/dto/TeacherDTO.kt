package ch.nidesso.matching.dto

import java.util.*


data class TeacherDTO(
    val id: UUID?,

    val name: String,
    val lastname: String,
    val phone: String,
    val email: String,

    val address: AddressDTO
)


data class CreateTeacherDTO (

    val name: String,
    val lastname: String,
    val phone: String,
    val email: String,

    val address: CreateAddressDTO
)
