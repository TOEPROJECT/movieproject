package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class UserCert {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int certId;
    private String certUserEmail;
    private String certAuthKey;
    private int certAuthStatus;
}
