import { CSSProperties } from "react";
import Circle from "./Circle";

const CircleLayout = () => {
  const CircleLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "20px",
  };
  return (
    <section style={CircleLayoutStyle}>
      {[
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
        "skyblue",
        "black",
      ].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};
export default CircleLayout;
