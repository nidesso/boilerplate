package ch.nidesso.matching

import jakarta.persistence.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.*

@Entity
data class School(
    var name: String,
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,

)

@Entity
data class Teacher(
    var username: String,
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,

    )

@Entity
data class Vacancy(
    @ManyToOne var school: School,
    @ManyToMany val teachers: MutableSet<Teacher> = mutableSetOf(),
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
)


interface SchoolRepository : JpaRepository<School, Long> {}
interface TeacherRepository : JpaRepository<Teacher, Long> {}
interface VacancyRepository : JpaRepository<Vacancy, Long> {}

@Service
class VacancyService(
    val vacancyRepository: VacancyRepository,
    val schoolRepository: SchoolRepository,
    val teacherRepository: TeacherRepository
) {

    fun createVacancy(vacancy: Vacancy) {
        val school = schoolRepository.findById(vacancy.school.id!!).get()
        vacancy.school = school;
        vacancyRepository.save(vacancy);
    }


    fun addTeacher(id: Long, teacher: Teacher) {
        val teacherEntity = teacherRepository.findById(teacher.id!!).get();
        val vacancy = vacancyRepository.findById(id).get()

        vacancy.teachers.add(teacherEntity);

        vacancyRepository.save(vacancy);
    }

}


@RestController
class SchoolResource(val repository: SchoolRepository) {

    @GetMapping("/school")
    fun findAll() = repository.findAll()

    @PostMapping("/school")
    fun add(@RequestBody item: School) = repository.save(item);

    @DeleteMapping("/school")
    fun delete(@RequestBody item: School) = repository.delete(item);

}


@RestController
class TeacherResource(val repository: TeacherRepository) {
    @GetMapping("/teacher")
    fun findAll() = repository.findAll()

    @PostMapping("/teacher")
    fun add(@RequestBody item: Teacher) = repository.save(item);

    @DeleteMapping("/teacher")
    fun delete(@RequestBody item: Teacher) = repository.delete(item);
}

@RestController
class VacancyResource(
    val repository: VacancyRepository, val vacancyService: VacancyService
) {

    @GetMapping("/vacancy")
    fun findAll() = repository.findAll()

    @PostMapping("/vacancy")
    fun create(@RequestBody item: Vacancy) = repository.save(item);

    @PutMapping("/vacancy/{id}")
    fun apply(
        @PathVariable id: Long, @RequestBody teacher: Teacher
    ) = vacancyService.addTeacher(id, teacher);
}