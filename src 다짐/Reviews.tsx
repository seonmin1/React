import { CSSProperties } from "react";

export type ReviewsProps = {
  Reviews: number;
};

const Reviews = (props: ReviewsProps) => {
  const ReviewsStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    lineHeight: "20px",
  };
  return <span style={ReviewsStyle}>({props.Reviews})</span>;
};
export default Reviews;
