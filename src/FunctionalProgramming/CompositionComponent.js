export const Button = ({ size, bgcolor, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: bgcolor,
        color: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props) => {
  return (
    <Button
      {...props}
      bgcolor="red"
      color="white"
      text="Danger"
      size="large"
    ></Button>
  );
};

export const SuccessButton = (props) => {
  return (
    <Button
      {...props}
      bgcolor="green"
      color="white"
      text="Success"
      size=""
    ></Button>
  );
};
