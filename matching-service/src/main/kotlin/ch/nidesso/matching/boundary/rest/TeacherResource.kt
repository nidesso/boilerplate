package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.TeacherRepository
import org.springframework.web.bind.annotation.*


@RestController
class TeacherResource(val repository: TeacherRepository) {
    @GetMapping("/teacher")
    fun findAll() = repository.findAll()

    @PostMapping("/teacher")
    fun add(@RequestBody item: Teacher) = repository.save(item);

    @DeleteMapping("/teacher")
    fun delete(@RequestBody item: Teacher) = repository.delete(item);
}