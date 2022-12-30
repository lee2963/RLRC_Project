package RLRC.rlrc.login;

import RLRC.rlrc.admin.Admin;
import RLRC.rlrc.news.NewsRepository;
import RLRC.rlrc.session.SessionConst;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody LoginDto loginDto, BindingResult bindingResult, HttpServletRequest request) {

        Admin loginAdmin = loginService.login(loginDto.getLoginId(), loginDto.getPassword());

        if (loginAdmin == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginAdmin.getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session != null) {
            session.invalidate();
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
