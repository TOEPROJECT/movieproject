package com.example.backend;

import java.util.List;

import javax.transaction.Transactional;

import com.example.backend.model.MovieInfo;
import com.example.backend.Repository.MovieInfoRepository;
import com.example.backend.Repository.TimeInfoRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class JpaTests {
    @Autowired
    TimeInfoRepository timeInfoRepository;

    @Autowired
    MovieInfoRepository movieInfoRepository;

    // @Test 
	// public void b() {
	// 	MovieInfo movieInfo = new MovieInfo();
	// 	movieInfo.setMovieNm("엔칸토");
	// 	movieInfoRepository.save(movieInfo); // 팀 저장
    // }

    //One -> Many (영화제목 -> 시작시간)-
    @Test @Transactional 
    public void findStartTime() {
        List<MovieInfo> movieList = movieInfoRepository.findAll();
        System.out.println(movieList);
       
    }
    
    // @Test @Transactional
    // public void findStartTime() {
    //     List<TimeInfo> list = timeInfoRepository.findAll();
    //     System.out.println(list);
    // }

    // @Test @Transactional
    // public void findStartMovie() {
    //     List<MovieInfo> list = movieInfoRepository.findAll();
    //     System.out.println(list);
    // }
    
}
