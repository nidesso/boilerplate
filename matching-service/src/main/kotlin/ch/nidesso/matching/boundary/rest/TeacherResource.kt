package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.TeacherDTO
import ch.nidesso.matching.dto.VacancyDTO
import ch.nidesso.matching.service.TeacherRepository
import org.springframework.web.bind.annotation.*


@RestController
class TeacherResource(
    val repository: TeacherRepository
) {
    @GetMapping("/teacher")
    fun findAll() = {}

    @PostMapping("/teacher/{teacherId}/vacancy")
    fun create(
        @PathVariable teacherId: Long, @RequestBody item: VacancyDTO
    ) = {}

    @PostMapping("/teacher")
    fun add(@RequestBody item: TeacherDTO) = {};

    @PutMapping("/teacher/")
    fun update(@RequestBody item: TeacherDTO) = {}

    @DeleteMapping("/teacher")
    fun delete(@RequestBody item: TeacherDTO) = {}
}