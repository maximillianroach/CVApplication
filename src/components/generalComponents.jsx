import { useState } from "react";
import "../styles/generalComponents.css";

export function Input({ title, type, isActive }) {
  return (
    <div>
      <h2 className="inputText">{title}</h2>
      <input type={type} disabled={!isActive} />
    </div>
  );
}

function GenBox({ inputs }) {
  const [isActive, setIsActive] = useState(true);

  const editClick = () => {
    if (isActive === false) {
      setIsActive(true);
    }
  };

  const submitClick = () => {
    if (isActive === true) {
      setIsActive(false);
    }
  };
  return (
    <div className="overallBox">
      <div className="infoBlock">
        {inputs.map((input) => {
          return (
            <Input
              key={title}
              title={input.title}
              type={input.type}
              isActive={isActive}
            />
          );
        })}

        <div className="buttonBox">
          <button onClick={editClick}>Edit</button>
          <button onClick={submitClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default GenBox;
