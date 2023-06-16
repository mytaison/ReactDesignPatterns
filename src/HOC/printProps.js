export const printProps = (Component) => {
  return (props) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
};
