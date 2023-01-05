package ch.nidesso.matching.entity

import jakarta.persistence.*
import org.hibernate.annotations.UuidGenerator
import java.util.*


@Entity
data class Vacancy(

    @ManyToOne var school: School = School(),
    @ManyToOne val schedule: Schedule = Schedule(),

    @ManyToMany val teachers: MutableSet<Teacher> = mutableSetOf(),
    @OneToMany val lessons: MutableSet<LessonVacancy> = mutableSetOf(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
) {
    fun addTeacher(teacher: Teacher) {
        this.teachers.add(teacher);
    }

}
