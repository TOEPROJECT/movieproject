package com.example.backend.controller;

import java.util.List;


import com.example.backend.repository.Seatrepository;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// @Controller
// @RequestMapping("/movie") //맨앞에 들어갈 주소
// // @CrossOrigin //리액트랑 연동시켜줌

// // //좌석 컨트롤러
// // public class SeatController {

// //     @GetMapping("/tables")
// //     @ResponseBody
// //     public List<Reserve> reserveList() {
// //         Sort sort = Sort.by(Order.desc("id"));
// //         List<reserve> list = seatrepository.save(id);
// //         return list;
// //     }
// // }