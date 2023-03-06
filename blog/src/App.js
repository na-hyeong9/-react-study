import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  // ES6 destructuring 문법
  // array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  let [글제목, 글제목변경] = useState(["코트 추천", "하의 추천", "신발 추천"]); //state 만드는 법
  let [좋아요, 좋아요증가] = useState(0);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="navBar">Blog</div>
      <div>
        <button
          onClick={() => {
            let copy = [...글제목]; //... <= 괄호 제거
            copy[0] = "상의 추천";
            글제목변경(copy); //소괄호 정보로 변경 , 기존 state == 신규 state의 경우 변경 안됨.
          }}
        >
          변경
        </button>
      </div>
      <div className="list">
        <h4>
          {" "}
          {글제목[0]}
          <span
            onClick={() => {
              좋아요증가(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}{" "}
        </h4>
        <p>2월 27일 발행</p>
        <h4> {글제목[1]} </h4>
        <p>2월 27일 발행</p>
        <h4> {글제목[2]} </h4>
        <p>2월 27일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
