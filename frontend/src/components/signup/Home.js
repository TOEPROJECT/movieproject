import axios from "axios";

function Home() {
  return (
    <div>
      <form>
        <h1>{sessionStorage.getItem("userId")}님 반갑습니다.</h1>
        {/* <a text="'현재 캐쉬 : ' + ${sessionStorage.getItem(userCash)}"></a><br /> */}
        {/* <button type="button" onclick="location.href='http://localhost:8080/userinfo'">개인 정보 조회</button> */}
        <input
          type="button"
          value="로그아웃"
          onClick={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/logout",
              method: "post",
            }).then((res) => {
              console.log(res.data);
              if (res.data.code === 100) {
                console.log(res.data);
                sessionStorage.clear();
                console.log(sessionStorage.getItem("userId"));
              }
            });
          }}
        />
      </form>
    </div>
  );
}

export default Home;
