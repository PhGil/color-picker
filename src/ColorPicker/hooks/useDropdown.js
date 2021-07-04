import { useState } from "react";

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdownOpen((state) => !state);
  };

  return [dropdownOpen, setDropdownOpen, toggleDropdownHandler];
};
export default useDropdown;
