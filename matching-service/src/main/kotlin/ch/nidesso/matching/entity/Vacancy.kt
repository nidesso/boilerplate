package ch.nidesso.matching.entity

import jakarta.persistence.*


@Entity
data class Vacancy(
    @ManyToOne var school: School = School(),
    @ManyToMany val teachers: MutableSet<Teacher> = mutableSetOf(),
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,

    ) {
    fun addTeacher(teacher: Teacher) {
        this.teachers.add(teacher);
    }

}
