import { useContext } from "react";
import ColorContext from "../context/ColorContext";

const DisplayHex = () => {
  const { currentColor } = useContext(ColorContext);

  return <div className="hex-wr">{currentColor}</div>;
};

export default DisplayHex;
