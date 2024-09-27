import Card from "./Card";
import { championRankingList } from "./data";

const CardLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        {championRankingList.map((v) => (
          <Card
            Rank={v.positionTierData.rank}
            Elevation={v.positionTierData.rank_prev}
            ChampionImage={v.image_url}
            ChampionName={v.name}
            Tier={v.positionTierData.tier}
            Position={v.positionName}
            WinLavel={Math.round(v.positionWinRate * 100)}
            PickLavel={Math.round(v.positionPickRate * 100)}
            BenLavel={Math.round(v.positionBanRate * 100)}
            ChampionRoundImage={v.image_url}
          />
        ))}
      </section>
    </main>
  );
};
export default CardLayout;
