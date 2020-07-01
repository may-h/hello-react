import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     //state의 초깃값 설정하기
  //     this.state = {
  //       number: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number } = this.state; //state조회는 this.state
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setSate가 호출되었습니다.");
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
