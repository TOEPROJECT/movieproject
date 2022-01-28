function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
          Hello, we are the TOE Project Team.
          The team members are Kim Deok-gwan, Lee Kyung-wook, Han Sang-hee, Hong Yeon-ha, and Heo Han-bit.
          We produced a movie reservation web using React and Spring.
          </p>
          <ul className="link">
            <li>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-twitter"></em>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/?hl=ko"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-instagram"></em>
              </a>
            </li>
            <li>
              <a
                href="https://ko-kr.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-facebook-square"></em>
              </a>
            </li>
          </ul>
        </div>
        <div className="blank"></div>

        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <span>
              서울시 금천구<br/>
              가산디지털1로 168, <br/>
              우림라이온스밸리<br/>
              A동 611호<br/>
              한가람IT전문교육센터
              </span>
            </li>
            <li>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                <a href="tel:01920492323">+1 019 2049 2323</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <p>
                <a href="mailto:supererrrr@naver.com">neveremail@naver.cox</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
