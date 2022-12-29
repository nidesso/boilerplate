package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.schedule.ScheduleDTO
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
class ScheduleResource(
) {

    @GetMapping("/school/{schoolId}/schedule/")
    fun findBySchool(
        @PathVariable schoolId: Long,
    ) = listOf(ScheduleDTO(listOf(), listOf()))


    @GetMapping("/schedule/{id}")
    fun findAll(
        @PathVariable id: Long,
    ) = listOf(ScheduleDTO(listOf(), listOf()))

    @PostMapping("/school/{schoolId}/teacher/{teacherId}/schedule/")
    fun create(
        @PathVariable schoolId: Long,
        @PathVariable teacherId: Long,
        @RequestBody item: ScheduleDTO
    ) = {};

    @PutMapping("/schedule")
    fun apply(
        @RequestBody schedule: ScheduleDTO
    ) = {}


    @DeleteMapping("/schedule/{scheduleId}")
    fun apply(
        @PathVariable scheduleId: Long,
    ) = {}
}