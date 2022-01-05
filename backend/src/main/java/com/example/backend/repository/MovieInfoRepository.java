package com.example.backend.repository;


import com.example.backend.model.MovieInfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieInfoRepository extends JpaRepository<MovieInfo, Long> {
    

}
