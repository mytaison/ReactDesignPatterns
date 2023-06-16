export const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

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

export const DangerBtn = partiallyApply(Button, {
  bgcolor: "red",
  text: "Danger",
});

export const SuccessBtn = partiallyApply(Button, {
  bgcolor: "green",
  text: "Success",
  size: "large",
});
