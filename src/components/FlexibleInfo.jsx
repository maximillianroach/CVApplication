import { useState } from "react";

import "../styles/generalComponents.css";

import { Input } from "./generalComponents.jsx";

// inputs is an array holding objects that hold the information for the inputs to the education section
// flexibleBoxes is an array holding the current flexible boxes
export default function FlexibleInfo({
  inputs,
  flexibleBoxes,
  setFlexibleBoxes,
}) {
  // addBox creates a new box
  const addBox = () => {
    setFlexibleBoxes([...flexibleBoxes, <FlexibleInfo inputs={inputs} />]);
  };

  const removeBox = (key) => {};
}
