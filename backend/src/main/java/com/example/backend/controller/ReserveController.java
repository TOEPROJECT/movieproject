package com.example.backend.controller;

import java.util.List;

import com.example.backend.model.MovieInfo;
import com.example.backend.repository.MovieInfoRepository;
import com.example.backend.repository.ReserveInfoRepository;
import com.example.backend.repository.TimeInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ReserveController {

    @Autowired
    ReserveInfoRepository reserveInfoRepository;

    @Autowired
    MovieInfoRepository movieInfoRepository;

    @Autowired
    TimeInfoRepository timeInfoRepository;

    @GetMapping
    public String movieReserve() {
        return "";
    }

    // @GetMapping("/movieinfo")
    // // @ResponseBody
    // public String MovieInfo(Model model) {
    //     List<com.example.backend.model.MovieInfo> list = movieInfoRepository.findAll();
    //     model.addAttribute("list", list);
    //     return "info";
    // }

    @GetMapping("/movie")
    @ResponseBody
    public List<MovieInfo> movieJson() {
        return movieInfoRepository.findAll();
    }

}