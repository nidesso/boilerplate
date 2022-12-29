package ch.nidesso.matching.dto


data class SchoolDTO(
    val id: Long,
    val name: String,
    val address: AddressDTO
)