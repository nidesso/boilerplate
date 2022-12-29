package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.entity.School
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
    fun findAll() = repository.findAll()

    @GetMapping("/school/{schoolId}")
    fun findByID(@PathVariable schoolId: Long) = repository.findById(schoolId);

    @PostMapping("/school")
    fun add(@RequestBody item: School) = repository.save(item);

    @PutMapping("/school")
    fun update(@RequestBody item: School) =
        if (repository.existsById(item.id!!)) repository.save(item)
        else throw NoSuchElementException()

    @PutMapping("/school/{schoolId}/teacher/{teacherId}")
    fun addTeacher(@PathVariable schoolId: Long, @PathVariable teacherId: Long) =
        if (repository.existsById(schoolId) && teacherRepository.existsById(teacherId)) schoolService.addTeacher(
            schoolId, teacherId
        )
        else throw NoSuchElementException()


    @DeleteMapping("/school")
    fun delete(@RequestBody item: School) = repository.delete(item);

}