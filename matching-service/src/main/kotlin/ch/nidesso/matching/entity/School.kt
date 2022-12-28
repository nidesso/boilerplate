package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity
data class School(
    var name: String = "",
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)