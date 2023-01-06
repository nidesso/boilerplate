package ch.nidesso.matching.entity

import jakarta.persistence.*
import org.hibernate.annotations.UuidGenerator
import java.util.*


@Entity
data class Vacancy(

    @ManyToOne var school: School = School(),
    @ManyToOne val schedule: Schedule = Schedule(),
    @ManyToOne val absentTeacher: Teacher = Teacher(),
    @ManyToOne val duration: TimeSpan = TimeSpan(),


    @ManyToMany val teacherApplications: MutableSet<Teacher> = mutableSetOf(),
    @OneToMany val lessons: MutableSet<LessonVacancy> = mutableSetOf(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
) {
    fun addTeacherApplication(teacher: Teacher) {
        this.teacherApplications.add(teacher);
    }
}
