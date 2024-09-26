import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "hard" | "smooth" | "circle";
  backgroundColor: "primary" | "hover" | "deactive";
};

const Button = (props: ButtonProps) => {
  const borderRadiusMap = {
    hard: "0px",
    smooth: "6px",
    circle: "20px",
  };
  const backgroundColorMap = {
    primary: "#205BF3",
    hover: "#478DF5",
    deactive: "#979797",
  };
  const ButtonStyle: CSSProperties = {
    backgroundColor: backgroundColorMap[props.backgroundColor],
    borderRadius: borderRadiusMap[props.borderRadius],
    color: "white",
    border: "none",
    padding: "10px 45px",
    fontSize: "32px",
  };
  return <button style={ButtonStyle}>Button</button>;
};

export default Button;
