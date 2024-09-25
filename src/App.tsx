// box - w,h,b

import Box from "./Box";

function App() {
  return (
    <div>
      <Box backgroundColor="red" height="200px" width="200px" text="빨강짱" />
      <Box backgroundColor="blue" height="200px" width="200px" text="파랑짱" />
      <Box backgroundColor="green" height="200px" width="200px" text="초록짱" />
      <Box
        backgroundColor="orange"
        height="200px"
        width="200px"
        text="주황짱"
      />
    </div>
  );
}

export default App;
