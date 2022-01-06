package com.example.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@Controller
public class MovieNewsController {

        @Autowired
        JdbcTemplate jt;

        @GetMapping("/news")
        @ResponseBody
        public List<Map<String, Object>> movienews(
                        @RequestParam(value = "page", defaultValue = "1") int page,
                        @RequestParam(value = "title", defaultValue = "") String title) {
                page = page * 10 - 10;
                return jt.queryForList(
                                "select * from movienews" +
                                                " where title like concat('%', ?, '%')" +
                                                " limit ?, 10",
                                title, page);
        }
}
