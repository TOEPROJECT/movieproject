import axios, { Axios } from "axios";

function MyPage() {
    // const formData = new FormData();
    // const id = sessionStorage.getItem("id"); //로그인 정보
    // formData.append("id", id);
    // console.log(id);
    // axios({
    //     url: 'http://localhost:8080/mypage',
    //     method : 'post',
    //     data : formData
    // }).then((res)=>{
    //     console.log(res.data.msg);
    // });
    return (
        <form>
            새로운 비밀번호 : <input type="password" name="userPw" />
            <input type="button" value="수정" onClick={(e) => {
                e.preventDefault();
                const userPw = document.querySelector('[name=userPw]').value;
                sessionStorage.setItem("userPw", userPw);
                const formData = new FormData();
                formData.append("id", sessionStorage.getItem("id"));
                formData.append("userPw", userPw);
                axios({
                    url: 'http://localhost:8080/pw_modi',
                    method: 'post',
                    data: formData
                }).then(res => {
                    console.log(res.data.msg);
                    alert(res.data.msg);
                    window.location = '/';
                });
            }}
            /><br />
            <input type="button" value="탈퇴" onClick={(e) => {
                const formData = new FormData();
                formData.append('id', sessionStorage.getItem("id"));
                axios({
                    url: 'http://localhost:8080/signout',
                    method: 'post',
                    data: formData
                }).then(res => {
                    console.log(res.data.msg);
                    alert(res.data.msg);
                    sessionStorage.clear();
                    window.location = '/';
                });
            }} />
        </form>
    )
}
export default MyPage;