package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.DurationDTO
import ch.nidesso.matching.dto.schedule.ScheduleDTO

data class VacancyDTO(
    val id: Long,
    val school: SchoolDTO,
    val schedule: ScheduleDTO,
    val duration: DurationDTO,
)
