package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.CreateSchoolDTO
import ch.nidesso.matching.dto.toDto
import ch.nidesso.matching.dto.toEntity
import ch.nidesso.matching.service.SchoolRepository
import ch.nidesso.matching.service.SchoolService
import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/school")
@CrossOrigin
class SchoolResource(
    val schoolRepository: SchoolRepository,
    val schoolService: SchoolService,
) {
    @GetMapping
    @Operation(summary = "Get schools")
    fun findAll() = schoolRepository
        .findAll()
        .map { it.toDto() }

    @GetMapping("/{schoolId}")
    @Operation(summary = "Get school by id")
    fun findByID(@PathVariable schoolId: UUID) = schoolRepository
        .findById(schoolId)
        .map { it.toDto() }

    @GetMapping("/{schoolId}/teacher/")
    @Operation(summary = "Get teacher by school id")
    fun findTeacherBySchool(@PathVariable schoolId: UUID) = schoolRepository
        .findById(schoolId).get()
        .teachers.map { it.toDto() }




    @PostMapping
    @Operation(summary = "add new schools")
    fun add(@RequestBody schoolDto: CreateSchoolDTO) =
        schoolService.addSchool(schoolDto.toEntity())

    @PutMapping("/{schoolId}/teacher/{teacherId}")
    @Operation(summary = "add teacher to school")
    fun addTeacher(@PathVariable schoolId: UUID, @PathVariable teacherId: UUID) =
        schoolService.addTeacher(schoolId, teacherId)

    @DeleteMapping("/{schoolId}")
    @Operation(summary = "delete school")
    fun delete(@PathVariable schoolId: UUID) =
        schoolRepository.deleteById(schoolId)
}