package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.AddressDTO
import ch.nidesso.matching.dto.SchoolDTO
import ch.nidesso.matching.dto.TeacherDTO
import ch.nidesso.matching.entity.SchoolRepository
import ch.nidesso.matching.entity.TeacherRepository
import ch.nidesso.matching.service.SchoolService
import org.springframework.web.bind.annotation.*

@RestController
class SchoolResource(
    val repository: SchoolRepository,
    val teacherRepository: TeacherRepository,
    val schoolService: SchoolService,
) {


    @GetMapping("/school")
    fun findAll() = listOf(SchoolDTO(1, AddressDTO("", "", 1)))

    @GetMapping("/school/{schoolId}")
    fun findByID(@PathVariable schoolId: Long) = SchoolDTO(schoolId, AddressDTO("", "", 1));

    @GetMapping("/school/{schoolId}/teacher/")
    fun findTeacherBySchool(@PathVariable schoolId: Long) = TeacherDTO(schoolId, "", "", AddressDTO("", "", 1));

    @GetMapping("/school/{schoolId}/vacancy/")
    fun findVacancyBySchool(@PathVariable schoolId: Long) = TeacherDTO(schoolId, "", "", AddressDTO("", "", 1));

    @PostMapping("/school")
    fun add(@RequestBody item: SchoolDTO) = {}

    @PutMapping("/school")
    fun update(@RequestBody item: SchoolDTO) = {}

    @PutMapping("/school/{schoolId}/teacher/{teacherId}")
    fun addTeacher(@PathVariable schoolId: Long, @PathVariable teacherId: Long) = {}

    @DeleteMapping("/school")
    fun delete(@RequestBody item: SchoolDTO) = {}
}