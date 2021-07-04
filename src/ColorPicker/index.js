import { useEffect, useState } from "react";
import DisplayColor from "./components/DisplayColor";

import DisplayHex from "./components/DisplayHex";
import SelectColors from "./components/SelectColors";
import ColorContext from "./context/ColorContext";

import "./styles/index.scss";

const ColorPicker = ({ value, onChange, colors }) => {
  const [currentColor, setCurrentColor] = useState(value);

  useEffect(() => {
    onChange && onChange(currentColor);
  }, [currentColor, onChange]);

  return (
    <div className="picker-wr">
      <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
        <DisplayHex />
        <DisplayColor />
        <SelectColors colors={colors} />
      </ColorContext.Provider>
    </div>
  );
};

export default ColorPicker;
