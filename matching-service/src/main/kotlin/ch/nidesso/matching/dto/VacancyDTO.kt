package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.LessonScheduleDTO


data class VacancyDTO(
    val id: Long?,

    val scheduleId: Long,
    val teacherId: Long,

    var schoolId: Long,
    val lessons: List<LessonScheduleDTO>,
) {


}
