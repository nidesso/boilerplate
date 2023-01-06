package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import org.hibernate.annotations.UuidGenerator
import java.time.LocalDateTime
import java.util.*

@Entity
data class LessonVacancy(
    var dayCode: Number = 0,
    var lessonCode: Number = 0,
    var name: String = "",
    var date: LocalDateTime = LocalDateTime.now(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
)