package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class ScheduleEntityServiceTest @Autowired constructor(
    var scheduleService: ScheduleService, var teacherService: TeacherService, var schoolService: SchoolService
) {

    @Test
    fun shouldSaveSchedule() {

        val school = schoolService.addSchool(School("test"))
        val teacher = teacherService.addTeacher(Teacher("t1"))
        val lessons = mutableSetOf(LessonSchedule(1, 2, "test"))
        val durations = mutableSetOf(TimeSpan("a", "b"))

        val schedule = Schedule(
            "test", teacher, lessons, durations
        )

        scheduleService.addSchedule(school.id!!, schedule)

        schoolService.schoolRepository.findAll().get(0).let {
            assertEquals(1, it.schedules.size)
            assertEquals(1, it.schedules.toList().get(0).duration.size)
        }
    }


}