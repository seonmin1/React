import { CSSProperties } from "react";
import Button from "./Button";

type ButtonGridProps = {
  columNumber: number;
};

const ButtonGrid = (props: ButtonGridProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columNumber},1fr)`,
    gap: "30px",
  };
  return (
    <section style={gridStyle}>
      <Button backgroundColor="primary" borderRadius="hard" />
      <Button backgroundColor="primary" borderRadius="smooth" />
      <Button backgroundColor="primary" borderRadius="smooth" />
      <Button backgroundColor="hover" borderRadius="hard" />
      <Button backgroundColor="hover" borderRadius="smooth" />
      <Button backgroundColor="hover" borderRadius="smooth" />
      <Button backgroundColor="deactive" borderRadius="hard" />
      <Button backgroundColor="deactive" borderRadius="smooth" />
      <Button backgroundColor="deactive" borderRadius="smooth" />
    </section>
  );
};
export default ButtonGrid;
