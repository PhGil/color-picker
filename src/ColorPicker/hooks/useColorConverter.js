import { useCallback, useContext, useEffect, useState } from "react";
import ColorContext from "../context/ColorContext";
import formatRgbColor from "../helpers/formatRgbColor";
import hexToRgb from "../helpers/hexToRgb";
import rgbToHex from "../helpers/rgbToHex";

const useHexToRgb = (callback) => {
  const { currentColor, setCurrentColor } = useContext(ColorContext);
  const [rgbObject, setRgbObject] = useState(hexToRgb(currentColor));

  useEffect(() => {
    setRgbObject(hexToRgb(currentColor));
  }, [currentColor]);

  const convertRgbObjToHex = useCallback(() => {
    setCurrentColor(rgbToHex(rgbObject.R, rgbObject.G, rgbObject.B));
    callback && callback();
  }, [rgbObject, setCurrentColor, callback]);

  const resetToCurrentColor = useCallback(() => {
    setRgbObject(hexToRgb(currentColor));
    callback && callback();
  }, [currentColor, callback]);

  return {
    rgbObject,
    setRgbObject,
    convertRgbObjToHex,
    resetToCurrentColor,
    rgbColor: formatRgbColor(rgbObject),
  };
};

export default useHexToRgb;
