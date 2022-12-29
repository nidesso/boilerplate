package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.AddressDTO
import ch.nidesso.matching.dto.TeacherDTO
import ch.nidesso.matching.entity.TeacherRepository
import org.springframework.web.bind.annotation.*


@RestController
class TeacherResource(
    val repository: TeacherRepository
) {
    @GetMapping("/teacher")
    fun findAll() = listOf(TeacherDTO(1, "", "", AddressDTO("", "", 1)))


    @PostMapping("/teacher")
    fun add(@RequestBody item: TeacherDTO) = {};

    @PutMapping("/teacher/")
    fun update(@RequestBody item: TeacherDTO) = {}

    @DeleteMapping("/teacher")
    fun delete(@RequestBody item: TeacherDTO) = {}
}