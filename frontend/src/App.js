import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Seat from "./components/Seat";
import Pay from "./Pay";

import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/news" element={<MainPage />}></Route>
          {/* 경완오빠 로그인 페이지 넣기 */}
          {/* 덕관오빠 뉴스페이지 넣기 */}
          {/* 마이페이지 안에 들어가는 내용 만들어 넣기 */}
          <Route path="/seat" element={((<Pay />), (<Seat />))}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
