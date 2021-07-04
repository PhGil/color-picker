import { COLOR_RANGES_DATA } from "../../../constants/rangeConstants";
import RangeFormGroup from "../../shared/RangeFormGroup";

const ColorRanges = ({ rgbObject, setRgbObject }) => {
  const onChange = (event, label) => {
    const newRgbObject = { ...rgbObject, [label]: +event.target.value };
    setRgbObject(newRgbObject);
  };

  return (
    <>
      {COLOR_RANGES_DATA.map((label) => (
        <RangeFormGroup
          label={label}
          value={rgbObject[label]}
          onChange={onChange}
          key={label}
        />
      ))}
    </>
  );
};

export default ColorRanges;
