package ch.nidesso.matching.entity

import jakarta.persistence.*



@Entity
data class School(
    var name: String = "",

    @OneToMany(mappedBy = "school")
    val vacancies: MutableCollection<Vacancy> = mutableSetOf(),

    @OneToMany
    val teachers: MutableSet<Teacher> = mutableSetOf(),

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
)
