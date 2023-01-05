package ch.nidesso.matching.dto

import ch.nidesso.matching.dto.schedule.CreateScheduleDTO
import ch.nidesso.matching.dto.schedule.LessonScheduleDTO
import ch.nidesso.matching.dto.schedule.ScheduleDTO
import ch.nidesso.matching.entity.*
import java.util.*


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

fun LessonScheduleDTO.toEntity() = LessonSchedule(dayCode, lessonCode, name.orElse(""), id)
fun LessonSchedule.toDto() = LessonScheduleDTO(id!!, dayCode, lessonCode, Optional.of(name))


fun CreateScheduleDTO.toEntity() = Schedule(description = description,
    teacher = Teacher(id = teacherId),
    lessons = lessons.map { l -> l.toEntity() }.toMutableSet()

)


fun Schedule.toDto() = ScheduleDTO(
    id = id!!,
    teacherId = teacher.id!!,
    description = description,
    lessons = lessons.map { l -> l.toDto() } ,
    duration = listOf(),
    )