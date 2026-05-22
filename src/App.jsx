import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Objective from "./components/Objective";
import Work from "./components/Work";
import "./App.css";
import { Icon } from "@mdi/react";
import { Plus, Trash2, Check } from "lucide-react";

export default function App() {
  const [headerInfo, setHeaderInfo] = useState({
    name: "Bobby Jones",
    email: "bobby.jones@gmail.com",
    phoneNumber: "123-456-7890",
    address: "475 5th Avenue",
  });

  const [objectiveText, setObjectiveText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  );

  const [educationEntries, setEducationEntries] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "Yale University",
      degree: "Bachelor of Arts",
      fieldOfStudy: "Math and Computer Science",
      startDate: "2025-08-26",
      endDate: "2029-05-20",
    },
  ]);

  const updateEducationEntry = (entryID, name, value) => {
    setEducationEntries((prev) =>
      prev.map((e) => {
        return e.id === entryID ? { ...e, [name]: value } : e;
      }),
    );
  };

  const deleteEducationEntry = (entryID) => {
    const newEducationEntries = educationEntries.filter(
      (entry) => entry.id !== entryID,
    );
    setEducationEntries(newEducationEntries);
  };

  const addEducationEntry = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    };

    setEducationEntries([...educationEntries, newEntry]);
  };

  const [workEntries, setWorkEntries] = useState([
    {
      id: crypto.randomUUID(),
      company: "Jane Street",
      title: "Trader",
      startDate: "2025-05-02",
      endDate: "2026-06-23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const updateWorkEntry = (entryID, name, value) => {
    setWorkEntries((prev) => {
      return prev.map((e) => {
        return e.id === entryID ? { ...e, [name]: value } : e;
      });
    });
  };

  const deleteWorkEntry = (entryID) => {
    const newWorkEntries = workEntries.filter((entry) => entry.id !== entryID);
    setWorkEntries(newWorkEntries);
  };

  const addWorkEntry = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setWorkEntries([...workEntries, newEntry]);
  };

  return (
    <>
      <div className="App">
        <div className="form-section">
          <h1 className="header">CV Application Builder</h1>
          <div className="general-section">
            <General headerInfo={headerInfo} setHeaderInfo={setHeaderInfo} />
          </div>
          <div className="objective-section">
            <Objective
              objectiveText={objectiveText}
              setObjectiveText={setObjectiveText}
            />
          </div>
          <div className="education-section">
            <h3>Education</h3>
            {educationEntries.map((entry) => {
              return (
                <Education
                  key={entry.id}
                  entry={entry}
                  setEntry={updateEducationEntry}
                  deleteEntry={deleteEducationEntry}
                />
              );
            })}
            <button onClick={() => addEducationEntry()}>
              <Plus size={30} />
            </button>
          </div>
          <div className="work-section">
            <h3>Work Experience</h3>
            {workEntries.map((entry) => {
              return (
                <Work
                  key={entry.id}
                  entry={entry}
                  setEntry={updateWorkEntry}
                  deleteEntry={deleteWorkEntry}
                />
              );
            })}
            <button onClick={() => addWorkEntry()}>
              <Plus size={30} />
            </button>
          </div>
        </div>
        <div className="display-section"></div>
      </div>
    </>
  );
}
