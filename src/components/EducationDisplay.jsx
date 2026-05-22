import "../styles/Education.css";

export default function EducationDisplay({ educationEntries }) {
  return (
    <>
      <div className="education-header">Education</div>
      {educationEntries.map((entry) => {
        return (
          <div>
            <div>{entry.schoolName}</div>
            <div>
              {entry.degree} in {entry.fieldOfStudy}
            </div>
            <div>
              {entry.startDate} to {entry.endDate}
            </div>
          </div>
        );
      })}
    </>
  );
}
