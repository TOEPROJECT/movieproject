import react from "react";
import { useParams } from "react-router";
import Categories from "./Categories";
import MovieNewsList from "./components/MovieNewsList.js";

const MovieNewsPage = () => {
    const param = useParams();
    const category = param['*'] || 'all';

    return (
        <>
            <Categories category={category} />
            <MovieNewsList moivenewslist={category} />
        </>
    );
};

export default MovieNewsPage;