import axios from "axios";
import { useEffect } from "react";


function Login() {
  //   useEffect(() => {
  //     if (sessionStorage.getItem("id") != null) {
  //       alert("로그인 되어있습니다.");
  //       window.location = "/";
  //     }
  //   });


  return (
    <div className="loginSection">
      <div class="form">
        <form class="register-form"></form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData();
                const userId = e.target["0"].value;
                const userPw = e.target["1"].value;
                formData.append("userId", userId);
                formData.append("userPw", userPw);
                axios({
                  url: "http://localhost:8080/login",
                  method: "post",
                  data: formData,
                }).then((res) => {
                  console.log(res.data);
                  if (res.data != null) {
                    sessionStorage.setItem("id", res.data.user.id);
                    sessionStorage.setItem("userId", res.data.user.userId);
                    sessionStorage.setItem("userPw", res.data.user.userPw);
                    sessionStorage.setItem("userEmail",res.data.user.userEmail);
                    sessionStorage.setItem("userCash", res.data.user.userCash);
                    window.location = "/";
                  }
                  alert(res.data.msg);
                });
              }}
            >
              <h2>어서오세요!</h2>
              
              <input type="text" placeholder="아이디" />
              <br/>
              <input type="password" placeholder="비밀번호" />
              <br/>
              <input type="submit" value={"Login"} />
              <p className="signup">
                <a href="/signup">아직 회원이 아니신가요?</a>
              </p>
            </form>
            </div>
          </div>
  );
}

export default Login;
