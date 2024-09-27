import { CSSProperties } from "react";

export type AddressProps = {
  Address: string;
};

const Address = (props: AddressProps) => {
  const AddressStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    lineHeight: "20px",
  };
  return <span style={AddressStyle}>{props.Address}</span>;
};
export default Address;
