package ch.nidesso.matching.entity

import jakarta.persistence.*


@Entity
data class School(
    var name: String = "",
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)
