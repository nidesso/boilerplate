package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.Vacancy
import ch.nidesso.matching.entity.VacancyRepository
import ch.nidesso.matching.service.VacancyService
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
class VacancyResource(
    val vacancyRepository: VacancyRepository,
    val vacancyService: VacancyService
) {

    @GetMapping("/vacancy")
    fun findAll() = vacancyRepository.findAll()

    @PostMapping("/vacancy")
    fun create(@RequestBody item: Vacancy) = vacancyService.createVacancy(item);

    @PutMapping("/vacancy/{vacancyId}")
    fun apply(
        @PathVariable vacancyId: Long, @RequestBody teacher: Teacher
    ) = vacancyService.addTeacher(vacancyId, teacher);
}