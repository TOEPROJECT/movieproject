import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Seat from "./components/Seat";
import ReserveMain from "./components/reserve/ReserveMain";
import IndexMain from "./components/IndexMain";
import NewsPage from "./components/news/NewsPage.jsx";
import Login from "./components/signup/Login";
import SignUp from "./components/signup/SignUp";
import MyPage from "./components/signup/MyPage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexMain />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          {/* 경완오빠 로그인 페이지 넣기 */}
          {/* 마이페이지 안에 들어가는 내용 만들어 넣기 */}
          
          <Route path="/reserve" element={<ReserveMain/>}></Route>
          <Route path="/seat" element={<Seat/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/mypage" element={<MyPage/>}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
