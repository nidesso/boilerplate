package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import ch.nidesso.matching.entity.ScheduleLesson
import ch.nidesso.matching.entity.Schedule

import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface ScheduleRepository : JpaRepository<Schedule, UUID> {}
interface LessonRepository : JpaRepository<ScheduleLesson, UUID> {}
interface AddressRepository : JpaRepository<Address, UUID> {}
interface SchoolRepository : JpaRepository<School, UUID> {}
interface TeacherRepository : JpaRepository<Teacher, UUID> {}
interface VacancyRepository : JpaRepository<Vacancy, UUID> {}