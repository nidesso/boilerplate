package ch.nidesso.matching.dto

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School


fun AddressDTO.toEntity() = Address(street, city, postalCode, id)
fun Address.toDto() = AddressDTO(id!!, street, city, postalCode)




fun CreateSchoolDTO.toEntity() = School(
    name = name,
    addresses = addresses.map { a -> a.toEntity() }.toMutableSet(),
)
fun School.toDto() = SchoolDTO(
    id!!,
    name = name,
    addresses = addresses.map { a -> a.toDto() },
)