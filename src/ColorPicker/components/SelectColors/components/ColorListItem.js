import { useContext } from "react";
import ColorContext from "../../../context/ColorContext";
import Button from "../../shared/Button";
import ColorSquare from "../../shared/ColorSquare";

const ColorListItem = ({ colorName, hex, setDropdownOpen }) => {
  const { setCurrentColor } = useContext(ColorContext);

  const setColorHandler = () => {
    setCurrentColor(hex);
    setDropdownOpen(false);
  };

  return (
    <li>
      <Button className="color-list-item" onClick={setColorHandler}>
        <span>{colorName}</span>
        <ColorSquare color={hex} />
      </Button>
    </li>
  );
};

export default ColorListItem;
