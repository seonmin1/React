export type PositionProps = {
  Position: string;
};

const Position = (props: PositionProps) => {
  return (
    <div style={{ width: "24px", height: "24px", flex: "1" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src="https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925"
        alt=""
      />
    </div>
  );
};
export default Position;
