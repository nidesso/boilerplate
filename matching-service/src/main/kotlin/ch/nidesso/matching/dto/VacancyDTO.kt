package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.LessonVacancyDTO
import ch.nidesso.matching.dto.schedule.ScheduleDTO
import ch.nidesso.matching.dto.schedule.TimeSpanDTO
import java.util.*

data class VacancyDTO(
    val id: UUID?,

    val schedule: ScheduleDTO,

    val teacherApplicationIds: List<UUID>,
    val absentTeacher: TeacherDTO,

    val duration: TimeSpanDTO,

    var schoolId: UUID,
    val lessons: List<LessonVacancyDTO>,
)


