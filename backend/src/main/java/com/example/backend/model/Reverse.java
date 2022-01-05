package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data

public class Reverse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String title; //영화 이름
    String date; //영화 날짜
    String reservetime; //영화 시간
    String selectedSeat; //좌석 번호
}
