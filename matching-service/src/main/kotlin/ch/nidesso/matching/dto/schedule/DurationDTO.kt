package ch.nidesso.matching.dto.schedule

import java.time.LocalDateTime

data class DurationDTO (
    val start: LocalDateTime,
    val end: LocalDateTime,
)