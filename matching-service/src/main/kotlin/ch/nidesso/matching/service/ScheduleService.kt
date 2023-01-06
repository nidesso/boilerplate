package ch.nidesso.matching.service

import ch.nidesso.matching.dto.toDto
import ch.nidesso.matching.entity.Schedule
import org.springframework.stereotype.Service
import org.webjars.NotFoundException
import java.util.*

@Service
class ScheduleService(
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository,
    val scheduleRepository: ScheduleRepository,
    val lessonRepository: LessonScheduleRepository,
    val timeSpanRepository: TimeSpanRepository,
) {

    fun addSchedule(schoolId: UUID, schedule: Schedule): Schedule {

        if (!schoolRepository.existsById(schoolId))
            throw NotFoundException("schoolid $schoolId does not exist")
        if (!teacherRepository.existsById(schedule.teacher.id!!))
            throw NotFoundException("teacherid $schedule.teacher.id does not exist");


        schedule.lessons.map { lessonRepository.save(it) }
        schedule.duration.map { timeSpanRepository.save(it) }

        val result = scheduleRepository.save(schedule)
        schoolRepository.findById(schoolId).get().let {
            it.schedules.add(result)
            schoolRepository.save(it)
        }

        return result

    }


    fun findBySchoolId(schoolId: UUID) = schoolRepository
        .findById(schoolId)
        .get()
        .schedules
        .map { s -> s.toDto() }

}

