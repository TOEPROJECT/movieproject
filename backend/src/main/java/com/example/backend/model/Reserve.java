package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data

public class Reserve {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String title; //영화 이름
    String date; //영화 날짜
    String reservetime; //영화 시간
    String selectnum; //좌석 번호
    String watchpp; //영화보는 인원
}
