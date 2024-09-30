// 0버튼 만들고, 클릭하면 숫자가 1씩 올라가는 컴포넌트 만들기

import { useState } from "react";

const Up = () => {
  const [num, setNum] = useState(0);
  const abc = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  return <button onClick={abc}>{num}</button>;
};

export default Up;
