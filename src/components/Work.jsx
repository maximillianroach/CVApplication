import { useState } from "react";

export default function Work({ entry, setEntry, deleteEntry }) {
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
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              value={entry.company}
              onChange={handleChange}
            />

            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={entry.title}
              onChange={handleChange}
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Start Date"
              value={entry.startDate}
              onChange={handleChange}
            />

            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="End Date"
              value={entry.endDate}
              onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={entry.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <p>{entry.company}</p>
          <p>{entry.title}</p>
          <p>{entry.startDate}</p>
          <p>{entry.endDate}</p>
          <p>{entry.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteEntry(entry.id)}>Delete</button>
        </div>
      )}
    </>
  );
}
