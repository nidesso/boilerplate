package ch.nidesso.matching.dto.schedule

data class ScheduleDTO(
    val duration: List<TimespanDTO>,
    val lessons: List<List<LessonDTO>>,
)