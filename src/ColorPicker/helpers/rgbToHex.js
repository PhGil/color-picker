const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b].reduce((acc, value) => {
    const hex = value.toString(16);
    return `${acc}${hex.length === 1 ? "0" + hex : hex}`;
  }, "");

export default rgbToHex;
