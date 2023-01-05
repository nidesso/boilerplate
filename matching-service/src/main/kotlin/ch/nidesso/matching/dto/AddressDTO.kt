package ch.nidesso.matching.dto

import ch.nidesso.matching.entity.Address
import java.util.UUID

data class AddressDTO (
    val id: UUID?,
    val street: String,
    val city: String,
    val postalCode: String,
)
