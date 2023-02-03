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
		@Bean
		CommandLineRunner run(AdminRepository adminRepository){
			return args -> {
				Admin admin = new Admin();
				admin.setLoginId("admin");
				admin.setPassword("1q2w3e4r!");

				adminRepository.save(admin);
			};
		}
}
