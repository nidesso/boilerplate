package ch.nidesso.matching.dto

import ch.nidesso.matching.entity.Teacher


data class TeacherDTO(
    val id: Long,

    val name: String,
    val lastname: String,
    val phone: String,
    val email: String,

    val address: AddressDTO
){

}