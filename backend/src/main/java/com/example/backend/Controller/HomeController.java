package com.example.backend.controller;

import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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

    @PostMapping("/login")//로그인 과정
    public String loginpost(User user, HttpServletRequest request) {
        User result = userRepository.findByUserIdAndUserPw(user.getUserId(), user.getUserPw()); //find메소드로 id, pw를 찾아 저장시킴
        System.out.println("로그인 시 확인 중... "+result); //입력된 값과 일치한 db를 찾았는지 확인
        if (result != null) {
            session.setAttribute("user", result); //session에 result 라는 변수에 저장한 user 데이터를 저장
            return "redirect:/home";
        } else {
            System.out.println("오 류");//확인용 코드
            return "redirect:/login";
        }
    } 

    @PostMapping("/signup") // 회원가입 과정
    public String signUpPost(User user, HttpServletRequest request) {
        Object a = session.getAttribute("authStatus"); //세션에 저장한 인증 여부를 저장
        if(a == null) { //인증을 받지 못했으면 a값은 null
            System.out.println("이메일 인증에 실패하셨습니다.");// 확인용 코드
            return "signup"; // 처음부터 다시 입력
        } else {
            user.setAuthStatus(1); //인증 여부를 db에 저장
            userRepository.save(user);//입력받은 데이터를 db에 저장
            return ("redirect:/home"); // 회원가입 성공 시 main화면인 home url로 이동
        } 
    }

    @PostMapping("/signup_mail") // 인증코드를 입력한 이메일에 수신하는 과정
    @ResponseBody
    public String signUpMail(User user) {
        if (user.getUserEmail() == null) { 
            System.out.println("송신할 이메일 주소가 없습니다.");
            return "redirect:/signup";//입력받은 email주소가 없을 시 처음부터 다시 입력하게 함
        } else {
            String email = user.getUserEmail(); // getUserEmail로 입력한 유저의 이메일을 email이라는 변수에 저장 
            String key = createKey(); // createKey 메소드로 인증 코드 생성
            session.setAttribute("authKey", key); // session에 key 등록
            boolean isSend = mailService.sendMail(email, "인증 메일입니다", key); // 입력한 email로 인증 코드 송신
            if (isSend) {
                System.out.println("메일 송신 성공");
            } else {
                System.out.println("오류! 오류!");
            } // 확인용 코드
            return "ok";
        }
    }

    @PostMapping("/signup_cert")//수신받은 인증코드를 입력하여 인증 상태를 변경 시켜 회원가입을 진행시킬 수 있음.
    @ResponseBody
    public String signUpCert(User user) {
        if (user.getAuthKey().equals(session.getAttribute("authKey"))) {
            System.out.println("성 공");//확인용 코드
            session.setAttribute("authStatus", 1); //세션에 인증 여부를 저장
            return "done";
        } else {
            System.out.println("회원가입 실패");//확인용 코드
            return "/signup";
        }
    }

    @PostMapping("/logout")//로그아웃 버튼을 누르면 session에 저장된 데이터를 삭제함
    public String logout(HttpServletRequest request) throws Exception{
        session = request.getSession(false);
        if (session != null) {
            session.removeAttribute("user");
            session.removeAttribute("authKey");
            session.removeAttribute("authStatus");
        }
        return "redirect:/home";
    } 
    
    @PostMapping("/pw_modi")//입력받은 비밀번호로 db에 저장된 userPw를 변경
    public String userPwModify(@SessionAttribute("user") User modi, User user) {
        System.out.println("Attribute한 user에선??" +modi); //확인용 코드
        System.out.println("인풋받은 패스워드는?" +user.getUserPw());//확인용 코드
        modi.setUserPw(user.getUserPw());//session attribute로 호출한 userPw를 입력받은 userPW로 변경
        //이 부분에서 session에 저장된 데이터는 db에 저장된 데이터와 일치
        System.out.println("세이브 전 마지막 확인" +modi);
        session.setAttribute("user", modi); //session에 변경된 데이터를 저장
        userRepository.save(modi);//변경된 비밀번호 제외하고 나머지가 똑같으면 save해도 지장 없음
        return "redirect:/userinfo";
    }

    @PostMapping("/signout")//회원 탈퇴
    @ResponseBody
    public String signOutPost(@SessionAttribute("user")User signout,User user) {
        System.out.println(signout.getId());//확인용 코드
        user.setId(signout.getId());//ID를 세션에 저장되어 있는 ID로 지정
        //세션에 저장되어있는 ID = DB에 저장된 ID
        //setId를 하면서, 어느 칼럼? 데이터? 를 지울지 지정하는 효과를 가짐
        userRepository.delete(user); //Id로 지정이 되있기에 삭제하면 그 ID에 해당되는 data가 삭제
        session.removeAttribute("user");
        session.removeAttribute("authKey");
        session.removeAttribute("authStatus"); //로그아웃 하기 위해 사용한 세션 데이터 제거 
        return "delete";
    }
}
