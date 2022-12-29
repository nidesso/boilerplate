package ch.nidesso.matching.service

import ch.nidesso.matching.entity.Address
import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import org.springframework.data.jpa.repository.JpaRepository


interface AddressRepository : JpaRepository<Address, Long> {}
interface SchoolRepository : JpaRepository<School, Long> {}
interface TeacherRepository : JpaRepository<Teacher, Long> {}
interface VacancyRepository : JpaRepository<Vacancy, Long> {}