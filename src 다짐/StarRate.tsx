import { CSSProperties } from "react";

export type StarRateProps = {
  StarRate: number;
};

const StarRate = (props: StarRateProps) => {
  const StarRateStyle: CSSProperties = {
    color: "#FFC500",
    fontSize: "12px",
    fontWeight: "bold",
  };
  return <span style={StarRateStyle}>{props.StarRate}</span>;
};
export default StarRate;
