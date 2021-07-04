import ColorListItem from "./ColorListItem";

const ColorsList = ({ colors, setDropdownOpen }) => (
  <ul>
    {colors.map(({ colorName, hex }) => (
      <ColorListItem
        colorName={colorName}
        hex={hex}
        setDropdownOpen={setDropdownOpen}
        key={hex}
      />
    ))}
  </ul>
);

export default ColorsList;
