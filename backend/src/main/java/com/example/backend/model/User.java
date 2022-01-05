package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;



@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id; //회원 번호
    private String userName; //가입 시 적을 이름
    private String userId; //로그인 시 사용할 ID
    private String userPw; //로그인 시 사용할 PW
    private String userEmail; //가입 시 인증 코드를 수신할 Email 주소
    private int userCash = 50000; //예매 시 사용할 가상의 돈
    private String authKey; // 인증 코드
    private int authStatus = 0; // 인증 여부 확인. 0 : 인증 안됨, 1 : 인증 됨.
}
