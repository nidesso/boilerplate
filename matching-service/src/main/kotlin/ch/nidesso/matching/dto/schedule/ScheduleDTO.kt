package ch.nidesso.matching.dto.schedule

import ch.nidesso.matching.entity.LessonSchedule
import java.util.*

data class CreateScheduleDTO(
    val teacherId: UUID,

    val description: String,

    val duration: List<TimespanDTO>,
    val lessons: List<LessonScheduleDTO>,
)


data class ScheduleDTO(
    val id: UUID,
    val teacherId: UUID,

    val description: String,

    val duration: List<TimespanDTO>,
    val lessons: List<LessonScheduleDTO>,
)
