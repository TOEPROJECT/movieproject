import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    { name: 'movienews', text: '뉴스' }
];
const CategoriesBlock = styled.div`
    display: flex; padding: 1rem;
    width: 768px; margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover { color: #495057; }
    & + & { margin-left: 1rem; }
    &.active {
        font-weight: 600; color: #22b8cf;
        border-bottom: 2px solid #ssb8cf;
        &:hover {
            color: #3bc9db;
        }
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                    to={c.name === 'all' ? '/' : `/${c.name}`}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
