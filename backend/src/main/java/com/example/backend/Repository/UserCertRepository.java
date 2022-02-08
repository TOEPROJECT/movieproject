package com.example.backend.Repository;

import com.example.backend.model.UserCert;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCertRepository extends JpaRepository<UserCert, Integer> {
    UserCert findByCertAuthKey(String certAuthKey);
}//Repository 선언
