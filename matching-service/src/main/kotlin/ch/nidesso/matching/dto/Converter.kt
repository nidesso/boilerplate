package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.*
import ch.nidesso.matching.entity.*
import java.util.*


fun TeacherDTO.toEntity() = Teacher(
    name, lastname,
    phone, email,
    mutableSetOf(),
    address.toEntity(),
)

fun Teacher.toDto() = TeacherDTO(id!!, name, lastname, phone, email, address.toDto())
fun AddressDTO.toEntity() = Address(street, city, postalCode, id)
fun Address.toDto() = AddressDTO(id!!, street, city, postalCode)



fun CreateSchoolDTO.toEntity() = School(
    name = name,
    addresses = addresses.map { a -> a.toEntity() }.toMutableSet(),
)

fun School.toDto() = SchoolDTO(
    id!!,
    name = name,
    addresses = addresses.map { a -> a.toDto() },
)

fun SchoolDTO.toEntity() = School(
    name = name,
    addresses = addresses.map { a -> a.toEntity() }.toMutableSet(),
    id = id,
)

fun LessonScheduleDTO.toEntity() = LessonSchedule(
    dayCode, lessonCode, name.orElse(""), id
)

fun LessonSchedule.toDto() = LessonScheduleDTO(id!!, dayCode, lessonCode, Optional.of(name))


fun CreateScheduleDTO.toEntity() = Schedule(
    description = description,
    teacher = Teacher(id = teacherId),
    lessons = lessons.map { it.toEntity() }.toMutableSet(),
    duration = duration.map { it.toEntity() }.toMutableSet(),
)

fun Schedule.toDto() = ScheduleDTO(
    id = id!!,
    teacherId = teacher.id!!,
    description = description,
    lessons = lessons.map { it.toDto() },
    duration = duration.map { it.toDto() },
)

fun ScheduleDTO.toEntity() = Schedule(
    id = id,
    description = description,
    teacher = Teacher(id = teacherId),
    lessons = lessons.map { it.toEntity() }.toMutableSet(),
    duration = duration.map { it.toEntity() }.toMutableSet(),
)

fun TimeSpan.toDto() = TimeSpanDTO(starttime, endtime)
fun TimeSpanDTO.toEntity() = TimeSpan(startTime, endTime)

fun LessonVacancyDTO.toEntity() = LessonVacancy(dayCode, lessonCode, name.orElse(""), date, id = id)
fun LessonVacancy.toDto() = LessonVacancyDTO(id, dayCode, lessonCode, Optional.of(name), date)


fun VacancyDTO.toEntity() = Vacancy(
    id = id,
    schedule = schedule.toEntity(),
    teacherApplications = teacherApplicationIds.map { Teacher(id = it) }.toMutableSet(),
    absentTeacher = absentTeacher.toEntity(),
    duration = duration.toEntity(),
    school = School(id = schoolId),
    lessons = lessons.map { it.toEntity() }.toMutableSet(),
)

fun Vacancy.toDto() = VacancyDTO(id = id,
    schedule = schedule.toDto(),
    teacherApplicationIds = teacherApplications.map { it.id!! },
    absentTeacher = absentTeacher.toDto(),
    duration = duration.toDto(),
    schoolId = school.id!!,
    lessons = lessons.map { it.toDto() })
