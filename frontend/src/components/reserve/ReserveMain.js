import React, { useMemo, DatePickerComponent, useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./reservemain.css";
import axios from 'axios';


const seatClick = () =>{
  window.location.href='/seat'
}

const MovieList = () => {
  const [list, setList] = useState([{}]);
  

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/api/reserve',
      method: 'GET',
      dataType: 'json'
    }).then((res) => {
      // setList(res.data);
      const selectList = [];
      res.data.map((v) => {
        selectList.push({value: v.id, label: v.movieTitle});
      });
      setList(selectList);
      console.log(res.data);
    });
  }, []);
  

  return (
    <div class="row">
      <div className="category">Movie
      <Select options={list} defaultMenuIsOpen /></div>
      <div className="category">Time
      <Select options={list} defaultMenuIsOpen /></div>
      <br></br>
      <div className="text-light"onClick={seatClick}>
            <button>예매하기</button></div>
    </div>
  )
}

function ReserveMain() {
  return (
    // <div className="ReserveMain">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<MovieList />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <MovieList />
  )
}

export default ReserveMain;