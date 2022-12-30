package RLRC.rlrc.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class DataInit {

    private final AdminRepository adminRepository;

    @PostConstruct
    public void init() {
        Admin admin = new Admin();
        admin.setLoginId("admin");
        admin.setPassword("1q2w3e4r!");
        adminRepository.save(admin);
    }
}
