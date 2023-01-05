package ch.nidesso.matching.entity

import jakarta.persistence.*
import org.hibernate.annotations.UuidGenerator
import java.util.*


@Entity
data class School(
    var name: String = "",

    @OneToMany(mappedBy = "school")
    val vacancies: MutableCollection<Vacancy> = mutableSetOf(),

    @OneToMany
    val teachers: MutableSet<Teacher> = mutableSetOf(),

    @OneToMany(cascade = [CascadeType.PERSIST])
    val addresses: MutableSet<Address> = mutableSetOf(),

    @OneToMany
    val schedules: MutableSet<Schedule> = mutableSetOf(),

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,

    )
