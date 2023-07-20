package pep3.medio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MedioApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedioApplication.class, args);
	}

}
