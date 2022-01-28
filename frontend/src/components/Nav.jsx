import React, { useEffect } from "react";

function Nav(props) {
  useEffect(() => {
    const toggleBtn = document.querySelector(".navbar__toggleBtn");
    const menu = document.querySelector(".navbar__menu");
    const icon = document.querySelector(".navbar__icon");

    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      icon.classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="nav-item">
            <a className="nav-link" href="/">
              극장찾기 <span className="sr-only"></span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="/news">
              뉴스 <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              예매하기
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/reserve">
                빠른예매
              </a>
              <a className="dropdown-item" href="#">
                상영스케쥴
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                이벤트
              </a>
            </div>
          </li>
        </ul>

        <ul className="navbar__icon">
          <li>
            <a href="/mypage">
              <em className="fas fa-user-shield"></em>
            </a>
          </li>
          <li>
            <a href="/login">
              <em className="fas fa-sign-in-alt"></em>
            </a>
          </li>
          <li>
            <a href="#"  onClick={(e)=>{
              if(sessionStorage.getItem("id")!=null){
                alert("로그아웃");
                sessionStorage.clear();
                console.log(sessionStorage.getItem("userId"));
                window.location = '/';
              }else{
                alert("로그인 해주세요");
              }
              }}>
              <em className="fas fa-sign-out-alt"></em>
            </a>
          </li>
        </ul>

        <a href="#" className="navbar__toggleBtn">
          <h1>
            <em className="fas fa-hamburger"></em>
          </h1>
        </a>
      </nav>
    </header>
  );
}

export default Nav;
