package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.hibernate.annotations.UuidGenerator
import java.util.*

@Entity
data class ScheduleLesson(
    var dayCode: Number = 0,
    var lessonCode: Number = 0,
    var name: String = "",

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,

    )