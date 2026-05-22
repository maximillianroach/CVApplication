import { useState } from "react";
import { Plus, Trash2, Check, SquarePen } from "lucide-react";

export default function General({ headerInfo, setHeaderInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // when an input field changes, the name of the field and its value are recorded.
  // the field is then updated in the headerInfo object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeaderInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={headerInfo.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={headerInfo.email}
            onChange={handleChange}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={headerInfo.phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={headerInfo.phoneNumber}
            onChange={handleChange}
          />

          <button type="submit">
            <Check size={30} />
          </button>
        </form>
      ) : (
        <div>
          <h3>General Information</h3>
          <p>{headerInfo.name}</p>
          <p>{headerInfo.email}</p>
          <p>{headerInfo.address}</p>
          <p>{headerInfo.phoneNumber}</p>
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
