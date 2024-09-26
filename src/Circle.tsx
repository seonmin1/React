import { CSSProperties } from "react";

type CircleProps = {
  backgroundColor: string;
};

const Circle = (props: CircleProps) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    width: "100px",
    height: "100px",
  };
  return <div style={CircleStyle}></div>;
};
export default Circle;
