package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Vacancy
import org.springframework.stereotype.Service
import java.util.*

@Service
class VacancyService(
    val vacancyRepository: VacancyRepository,
    val scheduleRepository: ScheduleRepository,
    val lessonVacancyRepository: LessonVacancyRepository,
    val timeSpanRepository: TimeSpanRepository,
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository
) {

    fun addVacancy(schoolId: UUID, vacancy: Vacancy): Vacancy {

        val school = schoolRepository.findById(schoolId).orElseThrow()
        val absentTeacher = teacherRepository.findById(vacancy.absentTeacher.id!!).orElseThrow()
        val schedule = scheduleRepository.findById(vacancy.schedule.id!!).orElseThrow()

        val teacherApplications = teacherRepository
            .findAllById(vacancy.teacherApplications.map { it.id })
            .toMutableSet()

        return vacancyRepository.save(Vacancy(
            school = school,
            schedule = schedule,
            duration = timeSpanRepository.save(vacancy.duration),

            absentTeacher = absentTeacher,
            teacherApplications = teacherApplications,

            lessons = vacancy.lessons
                .map { lessonVacancyRepository.save(it) }
                .toMutableSet(),
        ))
    }


    fun addTeacherApplication(vacancyId: UUID, teacherId: UUID) {
        val vacancy = vacancyRepository.findById(vacancyId).orElseThrow()
        val teacher = teacherRepository.findById(teacherId).orElseThrow();

        vacancy.addTeacherApplication(teacher)
        vacancyRepository.save(vacancy)
    }

}

