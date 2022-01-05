package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;


import lombok.Data;


@Data
@Entity
public class MovieInfo {
    @Id
    @GeneratedValue
    private Long id;
    private String movieTitle; // 영화 제목

    @OneToMany(mappedBy = "movieinfo")
    List<TimeInfo> timeInfoList = new ArrayList<>();
}
