function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="sec aboutus">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            excepturi ut cum itaque vitae rerum fuga quia esse molliti.
          </p>
          <ul class="link">
            <li>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noreferrer"
              >
                <em class="fab fa-twitter"></em>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/?hl=ko"
                target="_blank"
                rel="noreferrer"
              >
                <em class="fab fa-instagram"></em>
              </a>
            </li>

            <li>
              <a
                href="https://ko-kr.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <em class="fab fa-facebook-square"></em>
              </a>
            </li>
          </ul>
        </div>

        <div class="sec quickLink">
          <h2>Quick Link</h2>
          <ul class="quick">
            <li>
              <a href="">정보</a>
            </li>

            <li>
              <a href="">예매</a>
            </li>

            <li>
              <a href="">뉴스</a>
            </li>

            <li>
              <a href="">로그인</a>
            </li>
          </ul>
        </div>

        <div class="sec contact">
          <h2>Contact Info</h2>
          <ul class="info">
            <li>
              <span>
                <em class="fas fa-map-marked-alt"></em>
              </span>

              <span>
                서울특별시 금천구 가산동 371-28
                <br />
                피닉스밸리, 923단지 19334호
              </span>
            </li>

            <li>
              <span>
                <em class="fas fa-phone-alt"></em>
              </span>

              <p>
                <a href="tel:01920492323">+1 019 2049 2323</a>
              </p>
            </li>

            <li>
              <span>
                <em class="fas fa-envelope"></em>
              </span>

              <p>
                <a href="mailto:supererrrr@naver.com">neveremail@naver.cox</a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyrightText">
        <p>Copyright 2022. Team TOE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
