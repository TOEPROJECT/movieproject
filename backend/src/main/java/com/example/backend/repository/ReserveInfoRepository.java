package com.example.backend.Repository;

import com.example.backend.model.ReserveInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReserveInfoRepository extends JpaRepository<ReserveInfo, String>{

}
