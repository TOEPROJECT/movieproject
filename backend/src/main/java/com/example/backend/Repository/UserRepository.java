package com.example.backend.repository;

import com.example.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserIdAndUserPw(String userId, String userPw); //유저의 id, pw를 찾음
}//Repository 선언
