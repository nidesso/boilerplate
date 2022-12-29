package ch.nidesso.matching.entity

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.ObjectIdGenerators
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
