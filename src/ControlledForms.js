import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [ageInputError, setAgeInputError] = useState("");
  const [haircolorInputError, setHaircolorInputError] = useState("");
  const [errorVisibility, setErrorVisibility] = useState("hidden");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [haircolor, setHaircolor] = useState("");
  const handleSubmit = (event) => {
    console.log(name);
    console.log(age);
    console.log(haircolor);
    event.preventDefault();
  };

  useEffect(() => {
    console.log("Its changing");
    if (name.length < 2) {
      setNameInputError("user name must be 2 or more characters");
    } else {
      setNameInputError("");
    }
    if (age < 18) {
      setAgeInputError("user age must be minimum 18");
    } else {
      setAgeInputError("");
    }
    if (haircolor.length < 3) {
      setHaircolorInputError("user haircolor must be 3 or more characters");
    } else {
      setHaircolorInputError("");
    }
    if (nameInputError || ageInputError || haircolorInputError) {
      setErrorVisibility("hidden");
    } else {
      setErrorVisibility("");
    }
  }, [
    name,
    age,
    haircolor,
    nameInputError,
    ageInputError,
    haircolorInputError,
  ]);

  return (
    <form onSubmit={handleSubmit}>
      <ul id="errors" className={errorVisibility}>
        {nameInputError ? <li>{nameInputError}</li> : <></>}
        {ageInputError ? <li>{ageInputError}</li> : <></>}
        {haircolorInputError ? <li>{haircolorInputError}</li> : <></>}
      </ul>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <br />
      <input
        name="haircolor"
        type="text"
        placeholder="Hair Color"
        value={haircolor}
        onChange={(e) => setHaircolor(e.target.value)}
      ></input>
      <input type="submit" value="submit"></input>
    </form>
  );
};
