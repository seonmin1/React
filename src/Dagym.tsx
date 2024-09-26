// type DagymProps = {
//   component: ReactNode;
// };

import { CSSProperties } from "react";

const Card = () => {
  const CardStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1040px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  };
  const album = () => {
    const albumStyle: CSSProperties = {
      width: "300px",
      height: "300px",
    };
  };
  const img = () => {
    const imgStyle: CSSProperties = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };
  };
  return (
    <div style={CardStyle}>
      <div style={albumStyle}>
        <img style={imgStyle} src="" alt="" />
      </div>
    </div>
  );
};
export default Card;
