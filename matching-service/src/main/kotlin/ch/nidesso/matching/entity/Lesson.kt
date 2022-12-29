package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Lesson(
    var dayId: Number = 0,
    var lessonId: Number = 0,
    var name: String = "",

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
)