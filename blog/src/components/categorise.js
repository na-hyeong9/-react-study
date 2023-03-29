// 라이브러리 불러오기
import styled from "styled-components";
import { NavLink } from "react-router-dom"; //링크로 넘어가는 라우팅 역할
import { Outlet } from "react-router-dom"; // body 부분에서 사용

// 카테고리의 종류
const categories = [
  {
    name: "home",
    text: "홈",
  },
  {
    name: "find",
    text: "친구찾기",
  },
];

// 블락 스타일
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

// 버튼 스타일
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <div>
      <header>
        <CategoriesBlock>
          {categories.map((c) => (
            <Category key={c.name} to={c.name === "home" ? "/" : `/${c.name}`}>
              {c.text}
            </Category>
          ))}
        </CategoriesBlock>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Categories;
