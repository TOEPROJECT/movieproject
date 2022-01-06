import { useState } from "react";
import { useEffect } from "react";

import newsAPI from "../newsAPI";
import Nav from "../Nav";
// import Footer from "../Footer";

function NewsPage() {
    const [news, setNews] = useState([]);
    const indexItems = {
        navItems: [
            { id: 1, title: "정보" },
            { id: 2, title: "예매" },
            { id: 3, title: "뉴스" },
        ],
    };
    console.log('newspage');
    useEffect(async () => {
        const newsList = await newsAPI();
        setNews(newsList);
    }, []);
    return (
        <div>
            <Nav navItems={indexItems.navItems} />
            {
                news.map((v) => {
                    console.log(v);
                    return <ul>
                        <li><a href={v.url}>{v.no} . {v.title}</a></li>
                    </ul>
                })
            }


            {/* <Footer /> */}
        </div>
    );
}
export default NewsPage;
