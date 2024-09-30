//  - 0 + 있음
// 10개 이상되면 버튼의 배경색깔 빨간색으로 변하게 만들기

import { CSSProperties, useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const PlusClick = () => {
    setNum((prev) => prev + 1);
  };
  const minusClick = () => {
    setNum((prev) => (prev == 0 ? 0 : prev - 1));
  };

  return (
    <div>
      <button onClick={minusClick}>-</button>
      <span style={{ backgroundColor: num >= 10 ? "red" : "white" }}>
        {num}
      </span>
      <button onClick={PlusClick}>+</button>
    </div>
  );
};

export default Counter;
