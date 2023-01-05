package ch.nidesso.matching.boundary.rest

import ch.nidesso.matching.dto.schedule.CreateScheduleDTO
import ch.nidesso.matching.dto.toEntity
import ch.nidesso.matching.service.ScheduleRepository
import ch.nidesso.matching.service.ScheduleService
import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@CrossOrigin
class ScheduleResource(
    val scheduleRepository: ScheduleRepository,
    val scheduleService: ScheduleService,
) {
    @GetMapping("/school/{schoolId}/schedule/")
    @Operation(summary = "find schedules by school id")
    fun findBySchool(
        @PathVariable schoolId: UUID,
    ) = scheduleService.findBySchoolId(schoolId)

    @PostMapping("/school/{schoolId}/schedule/")
    @Operation(summary = "create a new scheduler on a school")
    fun create(
        @PathVariable schoolId: UUID,
        @RequestBody item: CreateScheduleDTO
    )  = scheduleService.addSchedule(schoolId, item.toEntity())


    @DeleteMapping("/schedule/{scheduleId}")
    @Operation(summary = "delete a scheduler")
    fun apply(
        @PathVariable scheduleId: UUID,
    ) = scheduleRepository.deleteById(scheduleId)
}