package com.example.backend.Repository;

import com.example.backend.model.TimeInfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeInfoRepository extends JpaRepository<TimeInfo, Long>{
    
}
