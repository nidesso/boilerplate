package ch.nidesso.matching.entity

import jakarta.persistence.*


@Entity
data class Teacher(
    var username: String = "",

    @ManyToMany(mappedBy = "teachers")
    val vacancies: MutableCollection<Vacancy> = mutableSetOf(),

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
) {

}