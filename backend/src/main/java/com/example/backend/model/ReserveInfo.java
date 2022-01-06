package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import lombok.Data;

@Entity
@Data
public class ReserveInfo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id; // 예약번호(아이디)
    private String title; // 영화제목 
    private String runningTime; // 상영시간
    private String selectedSeat; // 좌석번호

    @ManyToOne
    User user;

    @Transient
    private Integer userId;
}
