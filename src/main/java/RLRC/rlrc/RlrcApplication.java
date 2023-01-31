package RLRC.rlrc;

import RLRC.rlrc.admin.Admin;
import RLRC.rlrc.admin.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RlrcApplication {

	public static void main(String[] args) {


		SpringApplication.run(RlrcApplication.class, args);
	}
}
