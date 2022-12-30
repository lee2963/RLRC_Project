package RLRC.rlrc.login;

import RLRC.rlrc.admin.Admin;
import RLRC.rlrc.admin.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.*;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final AdminRepository adminRepository;

    public Admin login(String loginId, String password) {
        return adminRepository.findByLoginId(loginId)
                .filter(a -> a.getPassword().equals(password))
                .orElse(null);
    }
}
