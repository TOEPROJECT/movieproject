package com.example.backend.Controller;

import java.util.List;


import com.example.backend.model.MovieInfo;
import com.example.backend.model.ReserveInfo;
import com.example.backend.model.TimeInfo;
import com.example.backend.model.User;
import com.example.backend.Repository.MovieInfoRepository;
import com.example.backend.Repository.ReserveInfoRepository;
import com.example.backend.Repository.TimeInfoRepository;
import com.example.backend.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping("/api")
public class ReserveController {

    @Autowired
    ReserveInfoRepository reserveInfoRepository;

    @Autowired
    MovieInfoRepository movieInfoRepository;

    @Autowired
    TimeInfoRepository timeInfoRepository;

    @Autowired
    UserRepository userRepository;

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

    @PostMapping("/seat")
    @ResponseBody
    public String seat(@RequestBody ReserveInfo reserveInfo) {
        System.out.println(reserveInfo);
        Integer userId = reserveInfo.getUserId();
        
        TimeInfo timeInfo = timeInfoRepository.findById(
                Long.parseLong(reserveInfo.getRunningTime())).get();
        
        reserveInfo.setRunningTime(timeInfo.getTime());
        
        MovieInfo movieInfo = movieInfoRepository.findById(
            Long.parseLong(reserveInfo.getTitle())).get();
        reserveInfo.setTitle(movieInfo.getMovieTitle());
            
        User user = userRepository.findById(userId).get();
        reserveInfo.setUser(user);

        reserveInfoRepository.save(reserveInfo);
        return "seat";
    }

}