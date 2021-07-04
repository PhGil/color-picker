import ColorListItem from "./ColorListItem";

const ColorsList = ({ colors, setDropdownOpen }) => (
  <ul>
    {colors.map((color, index) => (
      <ColorListItem
        {...color}
        setDropdownOpen={setDropdownOpen}
        key={`color-item-${index}`}
      />
    ))}
  </ul>
);

export default ColorsList;
