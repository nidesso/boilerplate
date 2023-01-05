package ch.nidesso.matching.dto.schedule

import java.util.*

data class LessonScheduleDTO(
    val id: UUID?,
    val dayCode: Number,
    val lessonCode: Number,
    val name: Optional<String>,
)
