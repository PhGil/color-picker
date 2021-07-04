import joinClassNames from "../../helpers/joinClassNames";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={joinClassNames("button", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
