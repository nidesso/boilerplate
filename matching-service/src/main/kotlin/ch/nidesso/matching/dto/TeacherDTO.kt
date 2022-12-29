package ch.nidesso.matching.dto


data class TeacherDTO(
    val id: Long,

    val name: String,
    val lastname: String,

    val address: AddressDTO
)