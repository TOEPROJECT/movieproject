package com.example.backend.Controller;

import java.util.List;

import com.example.backend.model.MovieInfo;
import com.example.backend.Repository.MovieInfoRepository;
import com.example.backend.Repository.TimeInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/api")
@CrossOrigin
public class APIController {
    @Autowired
    MovieInfoRepository movieInfoRepository;

    @Autowired
    TimeInfoRepository timeInfoRepository;

    @GetMapping("/reserve")
    @ResponseBody
    public List<MovieInfo> movieJson() {
        return movieInfoRepository.findAll();
    }

    
}
