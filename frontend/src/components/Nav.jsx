function Nav() {
  return (
    
    <nav class="navbar">
        <div class="navbar__logo">
          <em class="fas fa-film"></em>
          <h1>TOE BOX</h1>
        </div>

        <ul class="navbar__menu">
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/reserve">예매</a>
          </li>
          <li>
            <a href="/news">뉴스</a>
          </li>
        </ul>

        <ul class="navbar__icon">
          <li>
            <em class="fas fa-sign-in-alt"></em>
          </li>
          <li>
            <em class="fas fa-user-shield"></em>
          </li>
          <li>
            <em class="fas fa-shopping-cart"></em>
          </li>
          <li>
            <em class="fas fa-search"></em>
          </li>
        </ul>

        <a href="#" class="navbar__toggleBtn" onClick={(e) => {}}>
          <h1>
            <em class="fas fa-hamburger"></em>
          </h1>
        </a>
      </nav>
  );
}

export default Nav;
