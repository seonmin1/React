export type ChampionImageProps = {
  ChampionImage: string;
};

const ChampionImage = (props: ChampionImageProps) => {
  return (
    <div style={{ width: "24px", height: "24px", flex: "1" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "6px",
        }}
        src={props.ChampionImage}
        alt=""
      />
    </div>
  );
};
export default ChampionImage;
