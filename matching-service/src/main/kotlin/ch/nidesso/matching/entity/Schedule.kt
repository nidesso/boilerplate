package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import org.hibernate.annotations.UuidGenerator
import java.util.*

@Entity
data class Schedule(
    var name: String = "",

    @OneToMany
    var lessons: MutableSet<ScheduleLesson> = mutableSetOf(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,

    )