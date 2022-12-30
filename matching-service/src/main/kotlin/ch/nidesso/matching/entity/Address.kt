package ch.nidesso.matching.entity

import jakarta.persistence.*



@Entity
data class Address(
    var street: String = "",
    var city: String = "",
    var postalCode: String = "",

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
)
