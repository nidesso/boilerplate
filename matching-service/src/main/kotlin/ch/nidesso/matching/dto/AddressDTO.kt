package ch.nidesso.matching.dto

import java.util.*

data class AddressDTO (
    val id: UUID?,
    val street: String,
    val city: String,
    val postalCode: String,
)



data class CreateAddressDTO (
    val street: String,
    val city: String,
    val postalCode: String,
)
