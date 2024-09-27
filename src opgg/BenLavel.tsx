export type BenLavelProps = {
  BenLavel: number;
};

const BenLavel = (props: BenLavelProps) => {
  return (
    <span style={{ color: "#A2B4CC", fontSize: "12px", flex: "1" }}>
      {props.BenLavel}%
    </span>
  );
};
export default BenLavel;
