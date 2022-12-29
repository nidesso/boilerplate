package ch.nidesso.matching.dto.schedule

import java.util.*

data class ScheduleDTO(
    val duration: List<DurationDTO>,
    val lessons: List<List<LessonDTO>>,
)