import { useState } from "react";
import { Plus, Trash2, Check, SquarePen } from "lucide-react";

export default function Education({ entry, setEntry, deleteEntry }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEntry(entry.id, name, value);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            placeholder="School Name"
            value={entry.schoolName}
            onChange={handleChange}
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Degree"
            value={entry.degree}
            onChange={handleChange}
          />

          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            type="text"
            name="fieldOfStudy"
            id="fieldOfStudy"
            placeholder="Field of Study"
            value={entry.fieldOfStudy}
            onChange={handleChange}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Start Date"
            value={entry.startDate}
            onChange={handleChange}
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            placeholder="End Date"
            value={entry.endDate}
            onChange={handleChange}
          />
          <button type="submit">
            <Check size={30} />
          </button>
        </form>
      ) : (
        <div>
          <p>{entry.schoolName}</p>
          <p>{entry.degree}</p>
          <p>{entry.fieldOfStudy}</p>
          <p>{entry.startDate}</p>
          <p>{entry.endDate}</p>
          <div className="submit-edit-buttons">
            <button onClick={() => setIsEditing(true)}>
              <SquarePen size={30} />
            </button>
            <button onClick={() => deleteEntry(entry.id)}>
              <Trash2 size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
