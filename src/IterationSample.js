import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onRemove = (id) => {
    alert(id);
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    // const nextNames = names.concat({
    //   id: nextId,
    //   text: inputText,
    // });
    const nextNames = [...names, { id: nextId, text: inputText }];

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const nameList = names.map((
    name //인자값으로 id를 넘겨준다.
  ) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        type="text"
        placeholder="아이템입력"
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
