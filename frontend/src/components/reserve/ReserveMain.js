import React, { useMemo, DatePickerComponent, useState, useEffect, useRef } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./reservemain.css";
import axios from 'axios';
import Nav from "../Nav";
import Header from "../Header";
let allDataList = null;

const seatClick = () =>{
  window.location.href='/seat'
}

const MovieList = (props) => {
  const [list, setList] = useState([{}]);


  useEffect(() => {
    axios({
      url: 'http://localhost:8080/api/reserve',
      method: 'GET',
      dataType: 'json'
    }).then((res) => {
      // setList(res.data);
      allDataList = res.data;
      const selectList = [];
      res.data.map((v) => {
        selectList.push(
          {value: v.id, label: v.movieTitle},
          );
      });
      setList(selectList);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="reserve__">
      <Header/>
      <Nav/>
    <div class="select1">
      <div className="category">Movie</div>
      <Select 
        placeholder="영화를 선택해주세요."
        options={list} onChange={(e) => {
        console.log(e);
        //*** 
        sessionStorage.setItem("movieId",e.value);
        props.onSelected(e.value);
      }} />
      </div>
    </div>
  )
}

const TimeList = ( props ) => {
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState([]);
  console.log('time start props', props.value);
  useEffect(() => {
    console.log('time effect');
    if(props.value != null) {
      console.log(allDataList);
      let list = null;
      for(let obj of allDataList) {
        if(props.value === obj.id) {
          list = obj.timeInfoList;
        }
      } 
      const selectList = []
      list.map((v) => {
        selectList.push(
          {value: v.id, label: v.time},
        );
      });
      console.log(list);
      console.log(selectList);

      setList(selectList);
    }
  }, [props.value]);

  return (
    <div class="select2">
      <div className="category">Time</div>
      <Select 
        placeholder="시간을 선택해주세요."
        options={list} onChange={(e) => {
        console.log(e);
        //*** 
        sessionStorage.setItem("timeId",e.value);
        props.onSelected(e.value);
      }}/>
    </div>
  )
}


// defaultMenuIsOpen
function ReserveMain() {
  const [value, setValue] = useState(null);
  console.log('value ' + value);
    return (
    <>
    <MovieList onSelected={(value) => {
      console.log('movie selected');
      setValue(value);
    }}/>
    <TimeList value={value} onSelected={(value) => {
      console.log('time selected');
    }} />
    <div className="bottom">
    <button className="w-btn w-btn-gra1 w-btn-gra-anim"onClick={seatClick}>
            예매하기</button></div>
    </>
  )
}

export default ReserveMain;