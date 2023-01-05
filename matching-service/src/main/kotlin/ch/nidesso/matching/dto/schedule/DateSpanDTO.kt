package ch.nidesso.matching.dto.schedule

import java.time.LocalDateTime

data class DateSpanDTO (
    val start: LocalDateTime,
    val end: LocalDateTime,
) {
}