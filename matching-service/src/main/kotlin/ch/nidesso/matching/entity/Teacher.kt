package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity
data class Teacher(
    var username: String = "",

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)