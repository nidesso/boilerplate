package ch.nidesso.matching.service

import ch.nidesso.matching.boundary.rest.TeacherResource
import ch.nidesso.matching.dto.toDto
import ch.nidesso.matching.entity.LessonSchedule
import ch.nidesso.matching.entity.Schedule
import org.hibernate.validator.cfg.defs.UUIDDef
import org.springframework.stereotype.Service
import java.util.*

@Service
class ScheduleService(
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository,
    val scheduleRepository: ScheduleRepository,
    val lessonRepository: LessonScheduleRepository,
    val timeSpanRepository: TimeSpanRepository,
) {

    fun addSchedule(schoolId: UUID, schedule: Schedule) {

        if (!schoolRepository.existsById(schoolId)) return
        if (!teacherRepository.existsById(schedule.teacher.id!!)) return

        schedule.lessons.map { lessonRepository.save(it) }
        schedule.duration.map { timeSpanRepository.save(it) }

        scheduleRepository.save(schedule)
        schoolRepository.findById(schoolId).get().let {
            it.schedules.add(schedule)
            schoolRepository.save(it)
        }

    }


    fun findBySchoolId(schoolId: UUID) = schoolRepository
        .findById(schoolId)
        .get()
        .schedules
        .map { s -> s.toDto() }

}

