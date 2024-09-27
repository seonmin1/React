import { CSSProperties } from "react";
import Album, { AlbumProps } from "./Album";
import CategoryList, { CategoryListProps } from "./CategoryList";
import GymName, { GymNameProps } from "./GymName";
import StarRate, { StarRateProps } from "./StarRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Address, { AddressProps } from "./Address";
import Tag, { TagProps } from "./Tag";
import Price, { PriceProps } from "./Price";

export type CardUpperProps = AlbumProps &
  CategoryListProps &
  GymNameProps &
  StarRateProps &
  ReviewsProps &
  AddressProps &
  TagProps &
  PriceProps;

const CardUpper = (props: CardUpperProps) => {
  const CardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };
  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  };
  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div style={CardUpperStyle}>
      <Album image={props.image} />
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories} />
          <GymName GymName={props.GymName} />
          <div>
            <StarRate StarRate={props.StarRate} />
            <Reviews Reviews={props.Reviews} />
            <Address Address={props.Address} />
          </div>
        </div>
        <div style={eventStyle}>
          <Tag text={props.text} />
          <Price Price={props.Price} />
        </div>
      </div>
    </div>
  );
};
export default CardUpper;
