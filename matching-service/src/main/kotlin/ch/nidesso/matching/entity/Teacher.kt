package ch.nidesso.matching.entity

import jakarta.persistence.*


@Entity
data class Teacher(
    var name: String = "",
    var lastname: String = "",
    var phone: String = "",
    var email: String = "",

    @ManyToMany(mappedBy = "teachers")
    val vacancies: MutableCollection<Vacancy> = mutableSetOf(),

    @ManyToOne
    val address: Address = Address(),

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)