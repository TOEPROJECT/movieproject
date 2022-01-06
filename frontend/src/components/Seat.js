import './seat.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

function Seat() {
let selectedSeats = new Array();
    useEffect(() => {
        let test = [];
        
        let selectedSeatsMap = [];
        const seatWrapper = document.querySelector(".seat-wrapper");
        let clicked = "";
        let div = "";

        //좌석 배열 주기
        for (let i = 0; i < 7; i++) {
            div = document.createElement("div");
            seatWrapper.append(div);
            for (let j = 0; j < 7; j++) {
                const input = document.createElement('input');
                input.type = "button";
                input.name = "seats"
                input.classList = "seat";

                //3중포문을 사용하지 않기위해 
                mapping(input, i, j);
                div.append(input);
                input.addEventListener('click', function (e) {
                    console.log(e.target.value);

                    //중복방지 함수
                    console.log(e.target);
                    e.target.classList.add("seatD");
                    console.log(e.target.name);
                    selectedSeats = selectedSeats.filter((element, index) => selectedSeats.indexOf(element) != index);

                    //click class가 존재할때(제거해주는 toggle)
                    if (input.classList.contains("clicked")) {
                        input.classList.remove("clicked");
                        clicked = document.querySelectorAll(".clicked");
                        selectedSeats.splice(selectedSeats.indexOf(e.target.value), 1);
                        clicked.forEach((data) => {
                            selectedSeats.push(data.value);
                        });
                        //click class가 존재하지 않을때 (추가해주는 toggle)
                    } else {
                        input.classList.add("clicked");
                        clicked = document.querySelectorAll(".clicked");
                        clicked.forEach((data) => {
                            selectedSeats.push(data.value);
                        })
                    }
                    //
                    console.log(selectedSeats);
                })
            }
        }
        //Pay
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://service.iamport.kr/js/iamport.payment-1.1.5.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    //결제정보들
    const onClickPay = () => {
        const { IMP } = window;
        IMP.init("iamport"); //내 가맹점번호
        const data = {
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: `mid_${new Date().getTime()}`,
            name: "결제테스트",
            amount: "1000",
            custom_data: { name: "부가정보", decs: "세부 부가정보" },

            buyer_name: "구매자이름",
            buyer_tel: "010-1234-5678",
            buyer_email: "iamport@siot.do",
            buyer_addr: "서울특별시 강남구 삼성동",
            buyer_postcode: "123-456",
        };
        IMP.request_pay(data, callback);
    };
    //결제 성공인지 아닌지 판별
    const callback = (response) => {
        const {
            success,
            error_msg,
            imp_uid,
            merchant_uid,
            pay_method,
            paid_amount,
            status,
        } = response;
        if (success) {
            alert("결제성공");
        } else {
            alert(`결제 실패 : ${error_msg} `);
        }
    };
    //A1, B1 출력
    function mapping(input, i, j) {
        if (i === 0) {
            input.value = "A" + j;
        } else if (i === 1) {
            input.value = "B" + j;
        } else if (i === 2) {
            input.value = "C" + j;
        } else if (i === 3) {
            input.value = "D" + j;
        } else if (i === 4) {
            input.value = "E" + j;
        } else if (i === 5) {
            input.value = "F" + j;
        } else if (i === 6) {
            input.value = "G" + j;
        }
    }

    const seats = document.getElementsByClassName("seatD");

    function checkSeats(e) {
        sessionStorage.setItem("id","1");
        // const formData = new FormData(); 
        console.log(JSON.stringify(selectedSeats));
        const reserveInfo = {};
        reserveInfo['selectedSeat'] = JSON.stringify(selectedSeats); //좌석 선택
        reserveInfo['userId'] = sessionStorage.getItem("id"); //로그인 정보
        reserveInfo['title'] = sessionStorage.getItem("movieId"); //영화 제목
        reserveInfo['runningTime'] = sessionStorage.getItem("timeId"); //영화 러닝타임

        // 제목과 러닝타임 지우기
        sessionStorage.removeItem("movieId");
        sessionStorage.removeItem("timeId");

        axios({
            url: 'http://localhost:8080/api/seat',
            method: 'post',
            data: JSON.stringify(reserveInfo),
            headers : {
                'content-type': 'application/json'
            }
        }).then((res) => {
            console.log(res); //예매 확인시 메인으로 옮겨지기
            // window.location = '/'
        });

        // console.log('좌석정보');
        // console.log(seats);
 
        // const seatList = [];

        // for (let i = 0; i < seats.length; i++) {
        //     const element = seats[i];
        //     seatList.push(element.value);
        // }
        // //좌석 값 출력
        // console.log(seatList);
    }
    //html값은 return값 안에 넣어주기
    //예매 확인 버튼


    return (


        //post

        // <form onSubmit={checkSeats}>
        
            <center>

                <div className='color'>
                <div className="seat-wrapper">
                <p>여기는 스크린입니다</p>
            </div>
            
                <button className="w-btn w-btn-gra1 w-btn-gra-anim" onClick={checkSeats}>출력</button>
                <button onClick={function () { alert(seats.length + '자리가 맞나요?') }}>예매 확인!</button>
                <button className="w-btn-outline w-btn-red-outline" type='submit' onClick={onClickPay}>결제하기</button>
            </div></center>
        // </form>
    );
};

export default Seat;