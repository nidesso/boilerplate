package ch.nidesso.matching.service

import ch.nidesso.matching.entity.*

import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface ScheduleRepository : JpaRepository<Schedule, UUID> {}

interface LessonScheduleRepository : JpaRepository<LessonSchedule, UUID> {}
interface TimeSpanRepository: JpaRepository<TimeSpan, UUID> {}
interface AddressRepository : JpaRepository<Address, UUID> {}
interface SchoolRepository : JpaRepository<School, UUID> {}
interface TeacherRepository : JpaRepository<Teacher, UUID> {}
interface VacancyRepository : JpaRepository<Vacancy, UUID> {}