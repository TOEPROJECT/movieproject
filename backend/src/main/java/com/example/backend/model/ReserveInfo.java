package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class ReserveInfo {
    
    @Id
    private String id; 
    private String title; // 영화제목 
    private String runningTime; // 상영시간
    private String ticketNumber; // 예매번호
    private String selectedSeat; // 좌석번호
    private String watchpp; //영화 관람 인원
    private String selectedTheater; // 상영관이름 

}
