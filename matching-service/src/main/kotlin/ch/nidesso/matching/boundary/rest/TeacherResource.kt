package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.TeacherDTO
import ch.nidesso.matching.dto.toDto
import ch.nidesso.matching.dto.toEntity
import ch.nidesso.matching.service.TeacherRepository
import ch.nidesso.matching.service.TeacherService
import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@CrossOrigin
class TeacherResource(
    val repository: TeacherRepository,
    val teacherService: TeacherService
) {
    @GetMapping("/teacher")
    @Operation(summary = "get all teachers")
    fun findAll() = repository.findAll().map { it.toDto() }

    @GetMapping("/teacher/{teacherId}")
    @Operation(summary = "get teacher by id")
    fun findById(@PathVariable teacherId: UUID) = repository.findById(teacherId)

    @PostMapping("/teacher")
    @Operation(summary = "add new teacher")
    fun add(@RequestBody item: TeacherDTO) = teacherService.addTeacher(item.toEntity())
    @DeleteMapping("/teacher/{teacherId}")
    @Operation(summary = "delete teacher by id")
    fun delete(@PathVariable teacherId: UUID) = repository.deleteById(teacherId)
}