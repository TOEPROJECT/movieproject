import React from "react";
import styled from 'styled-components';

const MovieNewsItemBlock = styled.div`
display: flex;
.thumbnail {
    margin-right: 1rem;
    img {
        display: block; width: 160;
        height: 100px; object-fit: cover;
    }
}
.contents {
    h2 {
        margin: 0;
        a { color: black; }
    }
    p {
        margin: 0; line-height: 1.5;
        margin-top: 0.5rem; white-space: normal;
    }
}
& + & { margin-top: 3rem; }
`;

const MovieNewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <MovieNewsItemBlock>
            <div className="thumbnail">
                <a href={url} target="_blank">
                    <img src={urlToImage} alt="thumbnail" />
                </a>
            </div>
            <div className="contents">
                <h2>
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </MovieNewsItemBlock>
    );
};
export default MovieNewsItem;
    