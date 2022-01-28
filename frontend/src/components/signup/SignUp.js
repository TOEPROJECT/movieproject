import axios from "axios";

function SignUp() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData();

            // const userId = e.target['0'].value;
            // const userPw = e.target['1'].value;
            // const userName = e.target['2'].value;
            // const userEmail = e.target['3'].value;
            // const authKey = e.target['4'].value;
            // if(userId == '') {
            //     alert('id 입력')
            //     return false;
            // }else if(userPw == '') {
            //     alert('pw 입력');
            //     return false;
            // }else if(userName ==''){
            //     alert('이름 입력');
            //     return false;
            // }else if(userEmail ==''){
            //     alert('이메일 입력');
            //     return false;
            // }else if(userAuthKey ==''){
            //     alert('인증 코드 입력');
            //     return false;
            // }else{
            //     alert('회원가입 되었습니다.');
            //     return true;
            // } 유효성 검사 구현 불가
            const userId = document.querySelector('[name=userId]').value;
            const userPw = document.querySelector('[name=userPw]').value;
            const userName = document.querySelector('[name=userName]').value;
            const userEmail = document.querySelector('[name=userEmail]').value;
            const authKey = document.querySelector('[name=authKey]').value;
            formData.append("userId", userId);
            formData.append("userPw", userPw);
            formData.append("userName", userName);
            formData.append("userEmail", userEmail);
            formData.append("authKey", authKey);
            axios({
                url: 'http://localhost:8080/signup',
                method: 'post',
                data: formData
            }).then((res) => {
                if (res.data.code === 200) {
                    window.location = '/'
                }
                alert(res.data.msg);
            });
        }}>
            ID : <input type="text" name="userId" /><br />
            PW : <input type="password" name="userPw" /><br />
            이름 : <input type="text" name="userName" /><br />

            E-Mail : <input type="email" name="userEmail" />
            <input type="button" value="코드 발송" onClick={(e) => {
                e.preventDefault();
                const formData = new FormData();
                const email = document.querySelector('[name=userEmail]').value;
                formData.append('userEmail', email);
                axios({
                    url: 'http://localhost:8080/signupmail',
                    method: 'post',
                    data: formData
                }).then((res) => {
                    alert(res.data.msg)
                });
            }} /><br />

            인증코드 : <input type="text" name="authKey" />
            <input type="button" value="코드 인증" onClick={(e) => {
                const formData = new FormData();
                const authKey = document.querySelector('[name=authKey]').value;
                formData.append('authKey', authKey);
                axios({
                    url: 'http://localhost:8080/signupcert',
                    method: 'post',
                    data: formData
                }).then((res) => {
                    alert(res.data.msg);
                });
            }} /><br />
            <input type="submit" value="회원가입"></input>
        </form>
    )
}

export default SignUp;