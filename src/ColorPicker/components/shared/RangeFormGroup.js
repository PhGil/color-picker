import { useRef } from "react";
import {
  MAX_RANGE_VALUE,
  MIN_RANGE_VALUE,
} from "../../constants/rangeConstants";

const RangeFormGroup = ({ label, value, onChange }) => {
  const domId = useRef(`color-range-${label}`);
  const onChangeHandler = (event) => {
    onChange(event, label);
  };

  return (
    <div className="range-form-group">
      <label htmlFor={domId.current}>{label}</label>
      <input
        id={domId.current}
        className={`custom-range custom-range__${label}`}
        type="range"
        min={MIN_RANGE_VALUE}
        max={MAX_RANGE_VALUE}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default RangeFormGroup;
