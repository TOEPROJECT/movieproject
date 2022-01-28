/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import sample0 from "./img/sample0.jpg";
import sample1 from "./img/sample1.jpg";
import sample2 from "./img/sample2.jpg";
import sample3 from "./img/sample3.jpg";
import sample4 from "./img/sample4.jpg";
import sample5 from "./img/sample5.jpg";
import sample6 from "./img/sample6.jpg";
import sample7 from "./img/sample7.jpg";
import sample8 from "./img/sample8.jpg";
import sample9 from "./img/sample9.jpg";
import sample10 from "./img/sample10.jpg";

function Section() {
  const [weeklyBoxOfficeList, setWeeklyBoxOfficeList] = useState([]);
  const imgs = [
    sample0,
    sample1,
    sample2,
    sample3,
    sample4,
    sample5,
    sample6,
    sample7,
    sample8,
    sample9,
    sample10,
  ];
  useEffect(() => {
    const data = axios({
      url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=eac2d74bb1e0d22d56ecb6c486158dbc&targetDt=20220101&itemPerPage=10",
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
    <section className="section">
      <div className="productList" id="productList">
        {weeklyBoxOfficeList.map((v, idx) => {
          return (
            <div className="product">
              <div className="imgbox">
                <img src={imgs[idx]} />
                <div className="details">
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
  );
}

export default Section;
