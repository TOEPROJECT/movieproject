package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class MovieNews {
    @Id
    @GeneratedValue
    int no;
    String title;   //기사제목
    String date;    //기사날짜
    String description; //기사내용
    String url;         //기사링크

}
