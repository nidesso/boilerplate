package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.hibernate.annotations.UuidGenerator
import java.util.*


@Entity
data class Address(
    var street: String = "",
    var city: String = "",
    var postalCode: String = "",

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
)
