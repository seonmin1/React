import { CSSProperties } from "react";

type FreeContentsProps = {
  service: string;
};

const FreeContents = (props: FreeContentsProps) => {
  const FreeContentsStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };
  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999FA9",
  };
  const FreeStyle = {
    fontSize: "12px",
  };

  return (
    <div style={FreeContentsStyle}>
      <span style={serviceStyle}>무료 서비스</span>
      <span style={FreeStyle}>{props.service}</span>
    </div>
  );
};
export default FreeContents;
