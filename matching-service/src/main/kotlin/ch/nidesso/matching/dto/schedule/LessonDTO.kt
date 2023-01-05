package ch.nidesso.matching.dto.schedule

import ch.nidesso.matching.entity.ScheduleLesson
import java.util.*

data class LessonDTO(
    val id: Long,
    val dayId: Number,
    val lessonId: Number,
    val name: Optional<String>,
)