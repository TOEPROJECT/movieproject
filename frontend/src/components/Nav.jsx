function Nav(props) {
  return (
    <nav class="navbar">
      <div class="navbar__logo">
        <em class="fas fa-film"></em>
        <h1>TOE BOX</h1>
      </div>

      <ul class="navbar__menu">
        <li>
          <a href="#"></a>
          {props.navItems[0].title}
        </li>
        <li>
          <a href="#"></a>예매
        </li>
        <li>
          <a href="#"></a>뉴스
        </li>
      </ul>

      <ul class="navbar__icon">
        <li>
          <em class="fas fa-user-shield"></em>
        </li>
        <li>
          <em class="fas fa-shopping-cart"></em>
        </li>
        <li>
          <em class="fas fa-search"></em>
        </li>
        <li>
          <em class="fas fa-sign-in-alt"></em> 로그인
        </li>
      </ul>

      <a href="#" class="navbar__toggleBtn">
        <h1>
          <em class="fas fa-hamburger"></em>
        </h1>
      </a>
    </nav>
  );
}

export default Nav;
