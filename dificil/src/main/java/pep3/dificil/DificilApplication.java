package pep3.dificil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DificilApplication {

	public static void main(String[] args) {
		SpringApplication.run(DificilApplication.class, args);
	}

}
