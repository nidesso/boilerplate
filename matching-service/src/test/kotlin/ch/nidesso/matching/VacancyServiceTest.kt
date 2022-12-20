package ch.nidesso.matching

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

@SpringBootTest
class VacancyServiceTest @Autowired constructor(
    var vacancyService: VacancyService,
) {


    @Test
    fun testEntity() {

        val school = School("name");
        val teacher = Teacher("lehrer 1")



    }


}