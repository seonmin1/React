import { CSSProperties } from "react";

export type GymNameProps = {
  GymName: string;
};

const GymName = (props: GymNameProps) => {
  const GymNameStyle: CSSProperties = {
    fontWeight: "bold",
    lineHeight: "26px",
  };
  return <span style={GymNameStyle}>{props.GymName}</span>;
};
export default GymName;
