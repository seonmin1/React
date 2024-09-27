import { CSSProperties } from "react";
import CardUpper, { CardUpperProps } from "./CardUpper";
import CardDown from "./CardDown";

type CardProps = CardUpperProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <article style={CardStyle}>
      <CardUpper {...props} />
      <CardDown />
    </article>
  );
};
export default Card;
