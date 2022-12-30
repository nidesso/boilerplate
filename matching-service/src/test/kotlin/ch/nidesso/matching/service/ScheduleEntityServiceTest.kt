package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Lesson
import ch.nidesso.matching.entity.Schedule
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class ScheduleEntityServiceTest @Autowired constructor(
    var scheduleService: ScheduleService,
) {

    @Test
    fun shouldSaveSchedule() {
        val schedule = Schedule(
            lessons = mutableSetOf(Lesson(1,2,"test")),
        )

        scheduleService.save(schedule)

        scheduleService.scheduleRepository.findAll().let {
            assertEquals(1, it.size)
            assertEquals(1, it[0].lessons.size)
        }
    }


}