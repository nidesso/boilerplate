package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.DatespanDTO
import ch.nidesso.matching.dto.schedule.TimespanDTO
import ch.nidesso.matching.dto.schedule.LessonDTO

data class VacancyDTO(
    val vacancyId: Long,
    val scheduleId: Long,

    val duration: DatespanDTO,
    val lessons: List<LessonDTO>
)
