package ch.nidesso.matching.entity

import com.fasterxml.jackson.databind.BeanDescription
import jakarta.persistence.*
import org.hibernate.annotations.UuidGenerator
import java.time.Duration
import java.util.*

@Entity
data class Schedule(
    var description: String = "",

    @ManyToOne var teacher: Teacher = Teacher(),

    @OneToMany var lessons: MutableSet<LessonSchedule> = mutableSetOf(),
    @OneToMany var duration: MutableSet<TimeSpan> = mutableSetOf(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
)