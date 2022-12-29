package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.DurationDTO
import ch.nidesso.matching.dto.schedule.LessonDTO
import ch.nidesso.matching.dto.schedule.ScheduleDTO

data class VacancyDTO(
    val vacancyId: Long,
    val scheduleId: Long,

    val duration: DurationDTO,
    val lessons: List<LessonDTO>
)
