import "../styles/Work.css";

export default function WorkDisplay({ workEntries }) {
  return (
    <>
      <div className="work-header">Work Experience</div>
      {workEntries.map((entry) => {
        return (
          <div className="work-entry">
            <div className="work-main-information">
              <div>{entry.company}</div>
              <div>{entry.title}</div>
              <div>
                {entry.startDate} to {entry.endDate}
              </div>
            </div>
            <div>{entry.description}</div>
          </div>
        );
      })}
    </>
  );
}
