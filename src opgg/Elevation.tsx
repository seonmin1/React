export type ElevationProps = {
  Elevation: number;
};

const Elevation = (props: ElevationProps) => {
  return (
    <span style={{ color: "#139020", fontSize: "12px", flex: "1" }}>
      {props.Elevation}
    </span>
  );
};
export default Elevation;
