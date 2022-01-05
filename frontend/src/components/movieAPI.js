import axios from "axios";

async function movieAPi() {
  const data = axios({
    url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=eac2d74bb1e0d22d56ecb6c486158dbc&targetDt=20220101&itemPerPage=8",
    method: "get",
  });
  data.then(function (result) {
    console.log(result.data);
    return result.data;
  });
}

export default movieAPi;
