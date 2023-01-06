package ch.nidesso.matching.dto.schedule

import java.util.*


data class CreateScheduleDTO(
    val teacherId: UUID,
    val description: String,

    val duration: List<TimeSpanDTO>,
    val lessons: List<LessonScheduleDTO>,
)

data class ScheduleDTO(
    val id: UUID,
    val teacherId: UUID,

    val description: String,

    val duration: List<TimeSpanDTO>,
    val lessons: List<LessonScheduleDTO>,
)


