export type ChampionRoundImageProps = {
  ChampionRoundImage: string;
};

const ChampionRoundImage = (props: ChampionRoundImageProps) => {
  return (
    <div style={{ width: "24px", height: "24px", flex: "1" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "9999px",
        }}
        src="https://opgg-static.akamaized.net/meta/images/lol/14.19.1/champion/Sett.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925"
        alt=""
      />
    </div>
  );
};
export default ChampionRoundImage;
