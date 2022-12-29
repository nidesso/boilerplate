package ch.nidesso.matching.dto.schedule

import java.util.*

data class LessonDTO(
    val dayId: Int,
    val lessonId: Int,
    val name: Optional<String>
)
