import "../index.css";

import Header from "./Header";
import Nav from "./Nav";
import AdBanner from "./AdBanner";
import Section from "./Section";
import Footer from "./Footer";

function IndexMain() {
  const mainItems = {
    navItems: [
      { id: 1, title: "정보" },
      { id: 2, title: "예매" },
      { id: 3, title: "뉴스" },
    ],
    sectionItems: "",
    footerItems: "",
  };
  return (
    <>
      <Header></Header>
      <Nav navItems={mainItems.navItems}></Nav>
      <AdBanner></AdBanner>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default IndexMain;
