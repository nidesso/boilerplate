package ch.nidesso.matching.entity

import jakarta.persistence.*
import org.hibernate.annotations.UuidGenerator
import java.util.*


@Entity
data class Teacher(
    var name: String = "",
    var lastname: String = "",
    var phone: String = "",
    var email: String = "",

    @ManyToMany
    val vacancies: MutableCollection<Vacancy> = mutableSetOf(),

    @ManyToOne
    val address: Address = Address(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
)