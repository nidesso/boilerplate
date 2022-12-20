package ch.nidesso.matching.entity

import org.springframework.data.jpa.repository.JpaRepository

interface SchoolRepository : JpaRepository<School, Long> {}
interface TeacherRepository : JpaRepository<Teacher, Long> {}
interface VacancyRepository : JpaRepository<Vacancy, Long> {}