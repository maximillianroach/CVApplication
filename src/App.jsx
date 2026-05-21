import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import GenBox from "./components/generalComponents.jsx";
import FlexibleInfo from "./components/FlexibleInfo.jsx";
import "./App.css";

function App() {
  const genInfoArray = [
    { title: "Name", type: "text" },
    { title: "Email", type: "email" },
    { title: "Phone Number", type: "tel" },
  ];

  const edInfoArray = [
    { title: "School Name", type: "text" },
    { title: "Title of Study", type: "text" },
    { title: "Date of Study", type: "date" },
  ];

  const [edBoxes, setEdBoxes] = useState(<FlexibleInfo inputs={edInfoArray} />);

  return (
    <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      <h1>CV Application Builder</h1>
      <h2>General Information</h2>
      <GenBox inputs={genInfoArray} />
      <h2>Education</h2>
      <div className="educationBox">{edBoxes.map((edBox) => edBox)}</div>
    </div>
  );
}

export default App;
