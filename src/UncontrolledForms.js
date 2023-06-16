import React, { useRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const haircolorInput = useRef();
  const handleSubmit = (event) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(haircolorInput.current.value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput}></input>
      <br />
      <input name="age" type="number" placeholder="Age" ref={ageInput}></input>
      <br />
      <input
        name="haircolor"
        type="text"
        placeholder="Hair Color"
        ref={haircolorInput}
      ></input>
      <input type="submit" value="submit"></input>
    </form>
  );
};
