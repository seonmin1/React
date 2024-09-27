export type PickLavelProps = {
  PickLavel: number;
};

const PickLavel = (props: PickLavelProps) => {
  return (
    <span style={{ color: "#A2B4CC", fontSize: "12px", flex: "1" }}>
      {props.PickLavel}%
    </span>
  );
};
export default PickLavel;
