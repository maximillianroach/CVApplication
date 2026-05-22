import { useState } from "react";
import { Plus, Trash2, Check, SquarePen } from "lucide-react";

export default function Objective({ objectiveText, setObjectiveText }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const text = e.target.value;

    setObjectiveText(text);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <form className="fade-in" onSubmit={handleSubmit}>
            <label htmlFor="objective">Objective</label>
            <textarea
              id="objective"
              value={objectiveText}
              onChange={handleChange}
            ></textarea>
            <button type="submit">
              <Check size={30} />
            </button>
          </form>
        </div>
      ) : (
        <div className="fade-in">
          <h3>Objective</h3>
          <p>{objectiveText}</p>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <SquarePen size={30} />
          </button>
        </div>
      )}
    </>
  );
}
