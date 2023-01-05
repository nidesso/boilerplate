package ch.nidesso.matching.dto

import java.util.*



data class CreateSchoolDTO(
    val name: String,
    val addresses: List<AddressDTO>,
)


data class SchoolDTO(
    val id: UUID,
    val name: String,
    val addresses: List<AddressDTO>,
)

