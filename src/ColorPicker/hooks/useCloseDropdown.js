import { useCallback, useEffect } from "react";

const useCloseDropdown = (
  isOpen,
  setIsOpen,
  dropdownRef,
  dropDownCloseCallback
) => {
  const closeDropdownHandler = useCallback(
    (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        dropDownCloseCallback ? dropDownCloseCallback() : setIsOpen(false);
      }
    },
    [setIsOpen, dropdownRef, dropDownCloseCallback]
  );

  useEffect(() => {
    isOpen && document.addEventListener("click", closeDropdownHandler);

    return () => {
      isOpen && document.removeEventListener("click", closeDropdownHandler);
    };
  }, [isOpen, setIsOpen, closeDropdownHandler]);
};

export default useCloseDropdown;
