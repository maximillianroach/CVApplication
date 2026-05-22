import { useState } from "react";

export default function Objective({ objectiveText, setObjectiveText }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = () => {
    const text = e.target.value;

    setObjectiveText(text);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="objective">Objective</label>
            <textarea
              id="objective"
              value={objectiveText}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Objective</h3>
          <p>{objectiveText}</p>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}
