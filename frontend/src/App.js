

// import React, { useMemo, DatePickerComponent, useState, useEffect } from "react";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import ReserveMain from "./components/reserve/ReserveMain";

// import axios from 'axios';
// import Seat from './components/Seat';
// import Pay from './Pay';

import React, { useState, useEffect } from "react";
import Select from "react-select";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import axios from "axios";
import Seat from "./components/Seat";
import Pay from "./Pay";

// index html 분리
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Head from "./components/Head";



  


function App() {
  const indexItems = {
    navItems: [
      { id: 1, title: "정보" },
      { id: 2, title: "예매" },
      { id: 3, title: "뉴스" },
    ],
  };

  return (

    
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* html 파트 */}
          <Route path="/" element={<Head />}></Route>
          <Route
            path="/"
            element={<Nav navItems={indexItems.navItems} />}
          ></Route>
          <Route path="/" element={<Section />}></Route>
          <Route path="/" element={<Footer />}></Route>

          {/* 경완오빠 로그인 페이지 넣기 */}
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/seat" element={((<Pay />), (<Seat />))}></Route>

          {/* 마이페이지 안에 들어가는 내용 만들어 넣기 */}
          {/* 덕관오빠 뉴스페이지 넣기 */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
