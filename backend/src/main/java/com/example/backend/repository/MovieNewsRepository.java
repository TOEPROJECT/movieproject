package com.example.backend.Repository;

import java.util.List;

import com.example.backend.model.MovieNews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieNewsRepository 
        extends JpaRepository<MovieNews, Long> {
        List<MovieNews> findByTitleContaining(String title);
    
}
