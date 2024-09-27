export type ChampionNameProps = {
  ChampionName: string;
};

const ChampionName = (props: ChampionNameProps) => {
  return (
    <span style={{ fontSize: "12px", fontWeight: "bold", flex: "1" }}>
      {props.ChampionName}
    </span>
  );
};
export default ChampionName;
