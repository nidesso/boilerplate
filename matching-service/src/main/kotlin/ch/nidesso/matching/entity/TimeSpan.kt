package ch.nidesso.matching.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.hibernate.annotations.UuidGenerator
import java.time.LocalDateTime
import java.util.*


@Entity
data class TimeSpan(
    var starttime: String = "",
    var endtime: String = "",

    @Id @GeneratedValue(generator = "UUID") @UuidGenerator val id: UUID? = null,
)
