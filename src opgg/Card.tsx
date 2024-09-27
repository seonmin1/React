import { CSSProperties } from "react";
import Rank, { RankProps } from "./Rank";
import Elevation, { ElevationProps } from "./Elevation";
import ChampionImage, { ChampionImageProps } from "./ChampionImage";
import ChampionName, { ChampionNameProps } from "./ChampionName";
import Tier, { TierProps } from "./Tier";
import Position, { PositionProps } from "./Position.";
import WinLavel, { WinLavelProps } from "./WinLavel";
import PickLavel, { PickLavelProps } from "./PickLavel";
import BenLavel, { BenLavelProps } from "./BenLavel";
import ChampionRoundImage, {
  ChampionRoundImageProps,
} from "./ChampionRoundImage";

type CardProps = RankProps &
  ElevationProps &
  ChampionImageProps &
  ChampionNameProps &
  TierProps &
  PositionProps &
  WinLavelProps &
  PickLavelProps &
  BenLavelProps &
  ChampionRoundImageProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "5px 5px",
    gap: "10px",
    borderBottom: "1px solid #F0F2F4",
  };
  return (
    <article style={CardStyle}>
      <Rank Rank={props.Rank} />
      <Elevation Elevation={props.Elevation} />
      <ChampionImage ChampionImage={props.ChampionImage} />
      <ChampionName ChampionName={props.ChampionName} />
      <Tier Tier={props.Tier} />
      <Position Position={props.Position} />
      <WinLavel WinLavel={props.WinLavel} />
      <PickLavel PickLavel={props.PickLavel} />
      <BenLavel BenLavel={props.BenLavel} />
      <ChampionRoundImage ChampionRoundImage={props.ChampionRoundImage} />
      <ChampionRoundImage ChampionRoundImage={props.ChampionRoundImage} />
      <ChampionRoundImage ChampionRoundImage={props.ChampionRoundImage} />
    </article>
  );
};
export default Card;
