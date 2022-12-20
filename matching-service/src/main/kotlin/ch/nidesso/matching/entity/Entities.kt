package ch.nidesso.matching.entity

import jakarta.persistence.*

@Entity
data class School(
    var name: String = "",
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)

@Entity
data class Teacher(
    var username: String = "",
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)

@Entity
data class Vacancy(
    @ManyToOne var school: School = School(),
    @ManyToMany val teachers: MutableSet<Teacher> = mutableSetOf(),
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)
