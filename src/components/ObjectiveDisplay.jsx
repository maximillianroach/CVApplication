import "../styles/Objective.css";

export default function ObjectiveDisplay({ objectiveText }) {
  return (
    <>
      <div className="objectiveHeader">Objective</div>
      <div>{objectiveText}</div>
    </>
  );
}
