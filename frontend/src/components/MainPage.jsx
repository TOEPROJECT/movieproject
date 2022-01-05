// 분리된 파일
import Nav from "./Nav";
import Section from "./Section";
import Footer from "./pageParts/Footer";

// 호출한 라이브러리
import { Fragment } from "react";

function MainPage() {
  const indexItems = {
    navItems: [
      { id: 1, title: "정보" },
      { id: 2, title: "예매" },
      { id: 3, title: "뉴스" },
    ],
  };

  return (
    <Fragment>
      <Nav navItems={indexItems.navItems} />
      <Section />
      <Footer />
    </Fragment>
  );
}

export default MainPage;
