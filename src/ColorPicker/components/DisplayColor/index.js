import useDropdown from "../../hooks/useDropdown";
import useColorConverter from "../../hooks/useColorConverter.js";
import Button from "../shared/Button";
import ColorSquare from "../shared/ColorSquare";
import DropdownWrapper from "../shared/DropdownWrapper";
import ColorRanges from "./components/ColorRanges";
import DisplayColorButtons from "./components/DisplayColorButtons";

const DisplayColor = () => {
  const [dropdownOpen, setDropdownOpen, toggleDropdownHandler] = useDropdown();
  const {
    rgbObject,
    setRgbObject,
    convertRgbObjToHex,
    resetToCurrentColor,
    rgbColor,
  } = useColorConverter(() => setDropdownOpen(false));

  return (
    <>
      <Button className="display-color-wr" onClick={toggleDropdownHandler}>
        <ColorSquare color={rgbColor} />
      </Button>
      <DropdownWrapper
        isOpen={dropdownOpen}
        setIsOpen={setDropdownOpen}
        className="ranges-wr"
        triangleСlassName="color-dropdown-triangle"
        dropDownCloseCallback={resetToCurrentColor}
      >
        <ColorRanges rgbObject={rgbObject} setRgbObject={setRgbObject} />
        <DisplayColorButtons
          confirmHandler={convertRgbObjToHex}
          cancelHandler={resetToCurrentColor}
        />
      </DropdownWrapper>
    </>
  );
};

export default DisplayColor;
