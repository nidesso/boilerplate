package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Schedule
import org.springframework.stereotype.Service

@Service
class ScheduleService(
    val scheduleRepository: ScheduleRepository,
    val lessonRepository: LessonRepository,
) {

    fun save(schedule: Schedule) {
        schedule.lessons.forEach { 
            lessonRepository.save(it)
        }
        
        scheduleRepository.save(schedule)
    }

    

}

