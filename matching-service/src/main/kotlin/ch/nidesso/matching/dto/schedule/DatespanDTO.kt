package ch.nidesso.matching.dto.schedule

import java.time.LocalDateTime

data class DatespanDTO (
    val start: LocalDateTime,
    val end: LocalDateTime,
)