import {
  BLUE_INDEX,
  GREEN_INDEX,
  LONG_HEX_REGEX,
  RED_INDEX,
  SHORT_HEX_REGEX,
} from "../constants/colorsConstants";

const hexToRgb = (hex) => {
  const longHex = hex.replace(
    SHORT_HEX_REGEX,
    (match, r, g, b) => `${r}${r}${g}${g}${b}${b}`
  );

  const matches = LONG_HEX_REGEX.exec(longHex);

  if (matches) {
    return {
      R: parseInt(matches[RED_INDEX], 16),
      G: parseInt(matches[GREEN_INDEX], 16),
      B: parseInt(matches[BLUE_INDEX], 16),
    };
  }
};

export default hexToRgb;
