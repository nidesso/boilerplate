package ch.nidesso.matching.dto.schedule

import java.time.LocalDateTime

data class TimespanDTO (
    val start: LocalDateTime,
    val end: LocalDateTime,
)