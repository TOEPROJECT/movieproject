import React, { useEffect } from "react";

const Pay = (effect, deps) => {
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://service.iamport.kr/js/iamport.payment-1.1.5.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    const onClickPay = () => {
        const { IMP } = window;
        IMP.init('iamport'); //내 가맹점번호
        const data = {
            pg: 'html5_inicis', pay_method: 'card'
            , merchant_uid: `mid_${new Date().getTime()}`, name: '결제테스트', amount: '1000'
            , custom_data: { name: '부가정보', decs: '세부 부가정보' },

            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_email: 'iamport@siot.do',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456'
        };

        IMP.request_pay(data, callback);
    }

    const callback = (response) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            alert('결제성공');
        }
        else {
            alert(`결제 실패 : ${error_msg} `);
        }
    }
    return (
        <>
            <button onClick={onClickPay}>결제하기</button>
        </>
    );
}
export default Pay;
