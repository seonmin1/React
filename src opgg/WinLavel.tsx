export type WinLavelProps = {
  WinLavel: number;
};

const WinLavel = (props: WinLavelProps) => {
  return (
    <span style={{ color: "#A2B4CC", fontSize: "12px", flex: "1" }}>
      {props.WinLavel}%
    </span>
  );
};
export default WinLavel;
