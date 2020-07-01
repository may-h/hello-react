import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*
  ReactDOM.render()란?
  - 컴포넌트를 페이지에 렌더링하는 역할
  - react-dom  모듈을 불러와 사용할 수 있다. 
  - 첫번째 파라미터 : 페이지에 렌더링할 내용을 jsx형태로 작성
  - 두번째 파라미터 : jsx를 렌더링할 document 내부 요소를 설정 (여기서 root인 요소 안에 렌더링하도록 설정 -> public/index.html에 있음.)
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
