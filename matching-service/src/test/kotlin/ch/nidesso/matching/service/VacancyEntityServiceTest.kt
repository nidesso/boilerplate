package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.time.Duration

@SpringBootTest
class VacancyEntityServiceTest @Autowired constructor(
    val vacancyService: VacancyService,
    val schoolService: SchoolService,
    val scheduleService: ScheduleService,
    val teacherService: TeacherService
) {


    @Test
    fun shouldAddVacancy() {
        val school = schoolService.addSchool(School("s1"));
        val teacher = teacherService.addTeacher(Teacher(name = "abs"))
        val appTeacher = teacherService.addTeacher(Teacher(name = "ta"))

        val schedule = scheduleService.addSchedule(
            school.id!!,
            Schedule(
                "test",
                teacher,
                lessons = mutableSetOf(LessonSchedule(1, 2, "test"))
            )
        )

        val res = vacancyService.addVacancy(
            school.id!!, Vacancy(
                school = school,
                schedule = schedule,
                absentTeacher = teacher,
                duration = TimeSpan("", ""),
                teacherApplications = mutableSetOf(),
                lessons = mutableSetOf(LessonVacancy(), LessonVacancy()),
                )
        )

        vacancyService.vacancyRepository.findAll().let {
            assertEquals(1, it.size)
        }

        schoolService.schoolRepository.findById(school.id!!).get().let {
            assertEquals(1, it.vacancies.size)
        }

        vacancyService.addTeacherApplication(res.id!!, appTeacher.id!!)
        vacancyService.vacancyRepository.findById(res.id!!).get().let {
            assertEquals(1, it.teacherApplications.size)
        }
    }


}