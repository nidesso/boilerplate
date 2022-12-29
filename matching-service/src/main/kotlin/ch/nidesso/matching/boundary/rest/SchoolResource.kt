package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.entity.School
import ch.nidesso.matching.entity.SchoolRepository
import org.springframework.web.bind.annotation.*

@RestController
class SchoolResource(val repository: SchoolRepository) {

    @GetMapping("/school")
    fun findAll() = repository.findAll()

    @GetMapping("/school/{schoolId}")
    fun findByID(@PathVariable schoolId: Long) = repository.findById(schoolId);

    @PostMapping("/school")
    fun add(@RequestBody item: School) = repository.save(item);

    @DeleteMapping("/school")
    fun delete(@RequestBody item: School) = repository.delete(item);

}