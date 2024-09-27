import { CSSProperties } from "react";

export type PriceProps = {
  Price: number;
};

const Price = (props: PriceProps) => {
  const PriceStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3d4149",
  };
  return (
    <div style={PriceStyle}>
      <span>{props.Price}~</span>
      <span>/월</span>
    </div>
  );
};
export default Price;
