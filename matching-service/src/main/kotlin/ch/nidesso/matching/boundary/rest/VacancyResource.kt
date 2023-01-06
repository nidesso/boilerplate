package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.CreateVacancyDTO
import ch.nidesso.matching.dto.VacancyDTO
import ch.nidesso.matching.dto.toDto
import ch.nidesso.matching.dto.toEntity
import ch.nidesso.matching.service.SchoolRepository
import ch.nidesso.matching.service.VacancyRepository
import ch.nidesso.matching.service.VacancyService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@CrossOrigin
class VacancyResource(
    val vacancyRepository: VacancyRepository,
    val schoolRepository: SchoolRepository,
    val vacancyService: VacancyService,
) {

    @GetMapping("/vacancy")
    fun findAll() = vacancyRepository.findAll()

    @GetMapping("/vacancy/{vacancyId}")
    fun findById(
        @PathVariable vacancyId: UUID,
    ) = vacancyRepository.findById(vacancyId)

    @GetMapping("/school/{schoolId}/vacancy/")
    fun findVacancyBySchool(@PathVariable schoolId: UUID) = schoolRepository
        .findById(schoolId)
        .orElseThrow()
        .vacancies.map { it.toDto() }

    @PostMapping("/school/{schoolId}/vacancy")
    fun create(
        @PathVariable schoolId: UUID, @RequestBody item: CreateVacancyDTO
    ) = vacancyService.addVacancy(schoolId, item.toEntity())

    @PutMapping("/vacancy/{vacancyId}/teacher/{teacherId}")
    fun apply(
        @PathVariable vacancyId: UUID, @PathVariable teacherId: UUID
    ) = vacancyService.addTeacherApplication(vacancyId, teacherId)


    @PutMapping("/vacancy/{vacancyId}/teacher/{teacherId}/accept")
    fun accept(
        @PathVariable vacancyId: UUID,
        @PathVariable teacherId: UUID
    ) =  {}

}