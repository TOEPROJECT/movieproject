package com.example.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import javax.servlet.http.HttpSession;

import com.example.backend.model.ReserveInfo;
import com.example.backend.model.User;
import com.example.backend.model.UserCert;
import com.example.backend.repository.ReserveInfoRepository;
import com.example.backend.repository.UserCertRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.Service.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
public class HomeController {
    public String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤

            switch (index) {
            case 0:
                key.append((char) ((int) (rnd.nextInt(26)) + 97));
                //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                break;
            case 1:
                key.append((char) ((int) (rnd.nextInt(26)) + 65));
                //  A~Z 
                break;
            case 2:
                key.append((rnd.nextInt(10)));
                // 0~9
                break;
            }
        }
        return key.toString();
    } //랜덤하게 문자열을 생성함

    @Autowired
    UserRepository userRepository;

    @Autowired
    MailService mailService;

    @Autowired
    HttpSession session;

    @Autowired
    UserCertRepository userCertRepository;

    @Autowired
    ReserveInfoRepository reserveInfoRepository;

    @GetMapping("/login")//로그인 화면
    public String login() {
        return "login";
    }

    @GetMapping("/signup")//회원가입 화면
    public String signup() {
        return "signup";
    }

    @GetMapping("/home") //메인 화면
    public String home() {
        return "home";
    } 

    @GetMapping("/userinfo") //개인정보 수정, 회원탈퇴
    public String userinfo(){
        return "userinfo";
    }

    @PostMapping("/login") // 로그인 과정
    @ResponseBody
    public Map<String, Object> loginpost(@ModelAttribute User user) {
        Map<String, Object> map = new HashMap<>();
        User result = userRepository.findByUserIdAndUserPw(user.getUserId(), user.getUserPw()); // find메소드로 id, pw를 찾아                                                                                        // 저장시킴
        if (result != null) {
            map.put("user", result);
            map.put("msg","로그인 되었습니다.");
        } else{
            map.put("msg","로그인에 실패했습니다..");
        }
        return map;
    }
    

    @PostMapping("/signup") // 회원가입 과정
    @ResponseBody
    public Map<String, Object> signUpPost(User user) {
        Map<String, Object> result = new HashMap<>();
        UserCert userCert = userCertRepository.findByCertAuthKey(user.getAuthKey());
        if (userCert.getCertAuthStatus() == 1) { // 인증을 받지 못했으면 a값은 null
            user.setAuthStatus(1); // 인증 여부를 db에 저장
            userRepository.save(user);// 입력받은 데이터를 db에 저장
            result.put("msg", "회원가입에 성공했습니다"); // 처음부터 다시 입력
            result.put("code", 200); 
            // 회원가입 성공 시 main화면인 home url로 이동
        } else {
            System.out.println("이메일 인증에 실패하셨습니다.");// 확인용 코드
            result.put("msg", "이메일 인증에 실패했습니다"); // 처음부터 다시 입력
        }
        return result;
    }

    @PostMapping("/signupmail") // 인증코드를 입력한 이메일에 수신하는 과정
    @ResponseBody
    public Map<String, Object> signUpMail(User user, UserCert userCert) {
        Map<String, Object> result = new HashMap<>();
        String email = user.getUserEmail();
        System.out.println(email);
        String key = createKey(); // createKey 메소드로 인증 코드 생성
        boolean isSend = mailService.sendMail(email, "인증 메일입니다", key); // 입력한 email로 인증 코드 송신
        if (isSend) {
            userCert.setCertUserEmail(email);
            userCert.setCertAuthKey(key);
            userCertRepository.save(userCert);
            result.put("msg", "이메일이 송신되었습니다");
        } else {
            result.put("msg", "이메일 송신을 실패했습니다..");
        } // 알람용 코드
        return result;
    }

    @PostMapping("/signupcert") // 수신받은 인증코드를 입력하여 인증 상태를 변경 시켜 회원가입을 진행시킬 수 있음.
    @ResponseBody
    public Map<String, Object> signUpCert(User user) {
        Map<String, Object> result = new HashMap<>();
        String key = user.getAuthKey(); // key에는 입력받은 인증코드
        UserCert userCert = userCertRepository.findByCertAuthKey(key); // 인증코드를 통해 데이터베이스를 찾음
        if (userCert != null) {
            if (userCert.getCertAuthStatus() != 0) {
                result.put("msg", "이미 인증된 코드입니다.");
            } else {
                userCert.setCertAuthStatus(1);
                userCertRepository.save(userCert);
                result.put("msg", "인증이 완료되었습니다.");
            }
        } else {
            System.out.println("회원가입 실패");// 확인용 코드
            result.put("msg", "인증 코드를 적어주세요");
        }
        return result;
    }

    @PostMapping("/logout") // 로그아웃 버튼을 누르면 session에 저장된 데이터를 삭제함
    @ResponseBody
    public Map<String, Object> logout() {
        Map<String, Object> logout = new HashMap<>();
        logout.put("msg", "로그아웃 되었습니다.");
        return logout;
    }
    
    @PostMapping("/pw_modi")//입력받은 비밀번호로 db에 저장된 userPw를 변경
    @ResponseBody
    public Map<String, Object> userPwModify(User modi) {
        Map<String, Object> map = new HashMap<>();
        Integer id = modi.getId();
        String userPw = modi.getUserPw();
        User ori = userRepository.findById(id).get();
        ori.setUserPw(userPw);
        userRepository.save(ori);
        map.put("msg", "비밀번호 변경이 완료되었습니다.");
        return map;
    }

    @PostMapping("/signout")//회원 탈퇴
    @ResponseBody
    public Map<String, Object> signOutPost(User user) {
        Map<String, Object> map = new HashMap<>();
        User del = userRepository.findById(user.getId()).get();
        System.out.println(del);//확인용 코드
        map.put("msg", "삭제 완료"); 
        return map;
    }
    
    // @PostMapping("/mypage")//회원 탈퇴
    // @ResponseBody
    // public Map<String, Object> mypage(User user) {
    //     Map<String, Object> map = new HashMap<>();
    //     System.out.println(user.getId());//확인용 코드
    //     int i = user.getId();
    //     ReserveInfo ers = reserveInfoRepository.findByUserId(i);
    //     System.out.println(ers);//확인용 코드
        
    //     // User mypage = userRepository.findById(user.getId()).get();
    //     // System.out.println(mypage);//확인용 코드
    //     // Map<String, Object> map = new HashMap<>();
    //     // User del = userRepository.findById(user.getId()).get();
    //     map.put("msg", "done"); 
    //     return map;
    // }
}
