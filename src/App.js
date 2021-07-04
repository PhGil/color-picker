import "./App.scss";
import ColorPicker from "./ColorPicker";
import {
  DEFAULT_PICKER_COLOR,
  DEFAULT_PICKER_COLORS,
} from "./ColorPicker/constants/defaultPickerColors";

function App() {
  return (
    <div className="main-wr">
      <ColorPicker
        value={DEFAULT_PICKER_COLOR}
        onChange={(value) => {
          // console.log(value);
        }}
        colors={DEFAULT_PICKER_COLORS}
      />
    </div>
  );
}

export default App;
