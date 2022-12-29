package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany

@Entity
data class Schedule(
    var test: String = "",

    @OneToMany
    var lessons: MutableSet<Lesson> = mutableSetOf(),

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
)