package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.ToString;

@Data
@Entity
public class TimeInfo {
    @Id
    @GeneratedValue
    private Long id;
    private String time;

    //@JsonIgnore
    @ManyToOne  @ToString.Exclude @JsonIgnore
    MovieInfo movieinfo;

   

}
