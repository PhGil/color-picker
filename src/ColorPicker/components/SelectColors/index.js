import joinClassNames from "../../helpers/joinClassNames";
import useDropdown from "../../hooks/useDropdown";
import Button from "../shared/Button";
import DropdownWrapper from "../shared/DropdownWrapper";
import ColorsList from "./components/ColorsList";

const SelectColors = ({ colors }) => {
  const [dropdownOpen, setDropdownOpen, toggleDropdownHandler] = useDropdown();

  return (
    <>
      <Button
        className={joinClassNames(
          "select-colors-wr",
          dropdownOpen && "select-colors-wr__active"
        )}
        onClick={toggleDropdownHandler}
      />
      <DropdownWrapper isOpen={dropdownOpen} setIsOpen={setDropdownOpen}>
        <ColorsList colors={colors} setDropdownOpen={setDropdownOpen} />
      </DropdownWrapper>
    </>
  );
};

export default SelectColors;
