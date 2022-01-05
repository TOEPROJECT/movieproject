import axios from "axios";
import react, { useEffect, useState } from "react";
import styled from 'styled-components';
import MovieNewsItem from './components/MovieNewsItem';

const MovieNewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;
const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'http://ggoreb.com',
    urlToImage: 'https://via.placeholder.com/160'
}
const MovieNewsList = ({movienewslist}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query =
            movienewslist == 'all' ? '' : `&category=${movienewslist}`;

            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines' +
                    '?country=kr&apiKey=acadf98300bc4a65bac7eab7423c7d72'
                    + query
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [movienewslist]); // [] 안에 지정된 값이 변할 때 동작

    if (loading) {
        return <MovieNewsListBlock>대기 중...</MovieNewsListBlock>;
    }
    if (!articles) {
        return null;
    }
    return (
        <MovieNewsListBlock>
            {articles.map(article => {
                return <MovieNewsItem key={article.url} article={article} />;
            })}
        </MovieNewsListBlock>
    );
};
export default MovieNewsList;