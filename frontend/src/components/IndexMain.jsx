import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const IndexMain = () => {
  const [weeklyBoxOfficeList, setWeeklyBoxOfficeList] = useState([]);
  useEffect(() => {
    const data = axios({
      url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=eac2d74bb1e0d22d56ecb6c486158dbc&targetDt=20220101&itemPerPage=8",
      method: "get",
    });

    data.then(function (result) {
      console.log(result.data);
      const boxOfficeResult = result.data.boxOfficeResult;
      const weeklyBoxOfficeList = boxOfficeResult.weeklyBoxOfficeList;
      setWeeklyBoxOfficeList(weeklyBoxOfficeList);
    });
  }, []);
  return (
    <>
      <nav class="navbar">
        <div class="navbar__logo">
          <em class="fas fa-film"></em>
          <h1>TOE BOX</h1>
        </div>

        <ul class="navbar__menu">
          <li>
            <a href="/">정보</a>
          </li>
          <li>
            <a href="/reserve">예매</a>
          </li>
          <li>
            <a href="/news">뉴스</a>
          </li>
        </ul>

        <ul class="navbar__icon">
          <li>
            <em class="fas fa-sign-in-alt"></em>
          </li>
          <li>
            <em class="fas fa-user-shield"></em>
          </li>
          <li>
            <em class="fas fa-shopping-cart"></em>
          </li>
          <li>
            <em class="fas fa-search"></em>
          </li>
        </ul>

        <a href="#" class="navbar__toggleBtn" onClick={(e) => {}}>
          <h1>
            <em class="fas fa-hamburger"></em>
          </h1>
        </a>
      </nav>

      <section class="section">
        <div class="productList" id="productList">
          {weeklyBoxOfficeList.map((v, idx) => {
            return (
              <div class="product">
                <div class="imgbox">
                  <img src="./img/sample{idx}.jpg" alt="productMovie" />
                  <div class="details">
                    <h2>{v.movieNm}</h2>
                    <span>{v.openDt}</span>
                    <a href="/reserve">예매하기</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="sec aboutus">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, excepturi ut cum itaque vitae rerum fuga quia esse
              molliti.
            </p>
            <ul class="link">
              <li>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                  <em class="fab fa-twitter"></em>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/?hl=ko" target="_blank">
                  <em class="fab fa-instagram"></em>
                </a>
              </li>
              <li>
                <a href="https://ko-kr.facebook.com/" target="_blank">
                  <em class="fab fa-facebook-square"></em>
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div class="sec contact">
            <h2>Contact Info</h2>
            <ul class="info">
              <li>
                <span>
                  <em class="fas fa-map-marked-alt"></em>
                </span>
                <span>
                서울시 금천구 가산디지털1로 168 <br/>우림라이온스밸리 A동 611호<br/>한가람IT전문교육센터
                </span>
              </li>
              <li>
                <span>
                  <em class="fas fa-phone-alt"></em>
                </span>
                <p>
                  <a href="tel:01920492323">02-851-3701</a>
                </p>
              </li>
              <li>
                <span>
                  <em class="fas fa-envelope"></em>
                </span>
                <p>
                  <a href="mailto:supererrrr@naver.com">info@kcould.or.kr</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexMain;
