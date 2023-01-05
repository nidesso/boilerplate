package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.VacancyDTO
import ch.nidesso.matching.service.VacancyRepository
import ch.nidesso.matching.service.VacancyService
import org.springframework.web.bind.annotation.*

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
        @PathVariable vacancyId: Long,
    ) = vacancyRepository.findAll()

    @PostMapping("/school/{schoolId}/vacancy")
    fun create(
        @PathVariable schoolId: Long, @RequestBody item: VacancyDTO
    ) = {}

}