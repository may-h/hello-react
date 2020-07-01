//react-project를 생성할 때, node_module 디렉토리 내 react 모듈이 설치된다.
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice2";
import IterationSample from "./IterationSample";

/* Bundler (번들러)
  브라우저에 없는 import, require 같은 모듈을 불러오는 기능을 브라우저에서도 사용하기 위해 번들러를 사용한다. 
  리액트에서는 Webpack을 사용하는 추세
  *사용 이유 
  1. 번들러 도구를 사용하면 import/require로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 준다. 
  2. 또 최적화 과정에서 여러 개의 파일로 분리 될 수도 있다. 
*/

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

//  함수형 컴포넌트 : function 키워드를 사용하여 컴포넌트 생성
/* JSX란?
    - 자바스크립트의 확장 문법 
    - 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환
  사용 이유?
    - 컴포넌트를 렌더링 할때마다 React.createElement 함수를 사용해야 한다면 매우 불편하겠지? 
*/
function App1() {
  return (
    <>
      <h1>Hello React?? </h1>
    </>
  );
}

/**
 *  JSX 문법
 * 1. 감싸인 요소 (<div><</div> 또는 <Fragment>리액트v16부터~</Fragment> 또는 <></>)
 *    -> Virtual DOM에서 컴포넌트 변화를 감지해 낼 떄 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리구조로 이루어져야 한다는 규칙이 존재.
 *
 * 2. 자바스크립트 표현식 사용 가능 ( {name} )
 *
 * 3. If문 사용 불가, 조건부 연산자 사용(삼항 연산자)
 *
 * 4. AND 연산자(&&)를 사용한 조건부 렌더링
 *  --> 특정 조건에 만족할 때 보여주고 만족하지 않으면 아무것도 렌더링 하지 않는 상황에 적합
 *  --> false를 렌더링 할 떄는 null과 마찬가지로 아무것도 나타나지 않기 때문에 가능! (** 주의 ** 0은 예외적으로 나타난다. )
 *
 * 5. 인라인 스타일링
 *   -> 리앹그에서는 스타일을 적용할 때 객체 형태로 넣어줘야 한다.
 *   ->  dash(-) 는 없애도 카멜 표기법으로 작성 ( background-color --> backgroundColor )
 *
 * 6. class 대신 className
 *    -> JSX 에서는 class 대신에 className을 사용한다.
 *
 * 7. 꼭 닫아야 하는 태그
 *    -> HTML에서 <input>, <br> 등 태그를 닫지 않아도 작동하는 태그들이 있는데 리액트에서는 반드시 닫아줘야 한다.
 *    -> self-closing 태그 ( <input /> , <br /> )
 *
 * 8. 주석
 *    -> { /* * / }
 *
 * */

function App2() {
  const name = "리액트";
  return (
    <>
      <h1> {name} 안녕!! </h1>
    </>
  );
}

function App3() {
  const name = "리액트";
  return (
    <>
      {name === "리액트" ? (
        <h1> 리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </>
  );
}

function App4() {
  const name = "리액트";
  // return <>{name === "리액트" ? <h1> 리액트 입니다.</h1> : null}</>;
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>} </div>;
}

function App5() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, //단위를 생략하면 px로 지정된다.
  };

  return <div style={style}> {name} </div>;
}

function App6() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

/*
 < 컴포넌트 선언 방식 >
 1. 함수형 컴포넌트 
 2. 클래스형 컴포넌트 (ES6이후 생김)

 차이점? 
 -> 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다. 

 클래스형 컴포넌트?
 -> render 함수가 있어야 하며 그 안에 보여주어야 할 JSX를 반환해야 한다. 

 함수형 컴포넌트 장점
 -> 클래스형 컴포넌트 보다 선언하기가 편하다. 
    메모리 자원도 덜 사용한다. 
    프로젝트 완성하여 빌드 후 배포할 때도 함수형 컴포넌트를 사용하는 것이 결과물 크기가 더 작다. (별 차이는 안남)

함수형 컴포넌트 단점
    -> state와 라이프사이클 API 사용이 불가능 
        But 리액트 v16.8 업데이트 이후 Hook이 생기면서 해결되었다. 
*/

class AppClassComp extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
