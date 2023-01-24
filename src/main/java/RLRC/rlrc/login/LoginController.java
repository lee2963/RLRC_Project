package RLRC.rlrc.login;

import RLRC.rlrc.admin.Admin;
import RLRC.rlrc.news.NewsRepository;
import RLRC.rlrc.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Controller
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @GetMapping("/check-login")
    public ResponseEntity<Void> isLogin (@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Long adminId){

        if (adminId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
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
