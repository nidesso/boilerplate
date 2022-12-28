package ch.nidesso.matching

import io.swagger.v3.oas.annotations.OpenAPIDefinition
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
@OpenAPIDefinition
@SpringBootApplication
class Application


fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
