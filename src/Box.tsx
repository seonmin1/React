import { CSSProperties } from "react";

type propsType = {
  backgroundColor: "red" | "blue" | "green" | "orange";
  width: string;
  height: string;
  text: string;
};

const Box = (props: propsType) => {
  const BoxStyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={BoxStyle}>{props.text}</div>;
};

export default Box;
