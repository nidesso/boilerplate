package ch.nidesso.matching.dto.schedule

import java.time.LocalDateTime
import java.util.*

data class LessonVacancyDTO(
    val id: UUID?,
    val dayCode: Number,
    val lessonCode: Number,
    val name: Optional<String>,
    val date: LocalDateTime,
)

