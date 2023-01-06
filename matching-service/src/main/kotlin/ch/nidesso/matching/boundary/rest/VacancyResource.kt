package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.VacancyDTO
import ch.nidesso.matching.dto.toEntity
import ch.nidesso.matching.service.VacancyRepository
import ch.nidesso.matching.service.VacancyService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@CrossOrigin
class VacancyResource(
    val vacancyRepository: VacancyRepository,
    val vacancyService: VacancyService,
) {

    @GetMapping("/vacancy")
    fun findAll() = vacancyRepository.findAll()

    @GetMapping("/vacancy/{vacancyId}")
    fun findById(
        @PathVariable vacancyId: UUID,
    ) = vacancyRepository.findById(vacancyId)

    @PostMapping("/school/{schoolId}/vacancy")
    fun create(
        @PathVariable schoolId: UUID, @RequestBody item: VacancyDTO
    ) = vacancyService.addVacancy(schoolId, item.toEntity())

    @PutMapping("/vacancy/{vacancyId}/teacher/{teacherId}")
    fun apply(
        @PathVariable vacancyId: UUID, @PathVariable teacherId: UUID
    ) = vacancyService.addTeacherApplication(vacancyId, teacherId)

}