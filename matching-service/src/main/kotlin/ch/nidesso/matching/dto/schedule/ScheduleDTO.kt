package ch.nidesso.matching.dto.schedule

data class ScheduleDTO(
    val duration: List<DurationDTO>,
    val lessons: List<List<LessonDTO>>,
)