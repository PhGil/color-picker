import { createContext } from "react";
import { DEFAULT_PICKER_COLOR } from "../constants/defaultPickerColors";
import noop from "../helpers/noop";

const ColorContext = createContext({
  currentColor: DEFAULT_PICKER_COLOR,
  setCurrentColor: noop,
});

export default ColorContext;
