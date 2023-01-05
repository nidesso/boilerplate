package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.LessonDTO
import ch.nidesso.matching.entity.Schedule
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Vacancy


data class VacancyDTO(
    val id: Long?,

    val scheduleId: Long,
    val teacherId: Long,

    var schoolId: Long,
    val lessons: List<LessonDTO>,
) {


}
