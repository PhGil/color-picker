import { useRef } from "react";
import joinClassNames from "../../helpers/joinClassNames";
import useCloseDropdown from "../../hooks/useCloseDropdown";

const DropdownWrapper = ({
  isOpen,
  setIsOpen,
  dropDownCloseCallback,
  className,
  triangleСlassName,
  children,
}) => {
  const dropdownRef = useRef(null);
  useCloseDropdown(isOpen, setIsOpen, dropdownRef, dropDownCloseCallback);

  return isOpen ? (
    <div
      className={joinClassNames("dropdown-wrapper", className)}
      ref={dropdownRef}
    >
      <div
        className={joinClassNames(
          "dropdown-wrapper-triangle",
          triangleСlassName
        )}
      />
      {children}
    </div>
  ) : (
    <></>
  );
};

export default DropdownWrapper;
