package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.entity.Teacher
import ch.nidesso.matching.entity.TeacherRepository
import org.springframework.web.bind.annotation.*
import org.springframework.web.client.HttpClientErrorException.NotFound
import org.webjars.NotFoundException
import java.util.NoSuchElementException


@RestController
class TeacherResource(val repository: TeacherRepository) {
    @GetMapping("/teacher")
    fun findAll() = repository.findAll()

    @GetMapping("/school/{teacherID}")
    fun findByID(@PathVariable teacherID: Long) = repository.findById(teacherID);

    @PostMapping("/teacher")
    fun add(@RequestBody item: Teacher) = repository.save(item);

    @PutMapping("/teacher/")
    fun update(@RequestBody item: Teacher) =
        if (repository.existsById(item.id!!)) repository.save(item)
        else throw NoSuchElementException()

    @DeleteMapping("/teacher")
    fun delete(@RequestBody item: Teacher) = repository.delete(item);
}