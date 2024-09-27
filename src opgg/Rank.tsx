export type RankProps = {
  Rank: number;
};

const Rank = (props: RankProps) => {
  return (
    <span style={{ color: "#C4ADAF", fontSize: "12px", flex: "1" }}>
      {props.Rank}
    </span>
  );
};
export default Rank;
