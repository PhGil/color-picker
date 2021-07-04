import Button from "../../shared/Button";

const DisplayColorButtons = ({ confirmHandler, cancelHandler }) => (
  <div className="display-color-btns-wr">
    <Button className="button-secondary" onClick={cancelHandler}>
      CANCEL
    </Button>
    <Button className="button-success" onClick={confirmHandler}>
      OK
    </Button>
  </div>
);

export default DisplayColorButtons;
