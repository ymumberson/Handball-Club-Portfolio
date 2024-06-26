import { navLinks } from "../constants";
import { goals } from "../constants";
import { Card } from "react-bootstrap";

const Goals = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "goals").title}
      </h1>
      <div className="goals-section">
        {goals.map((goal, index) => {
          return <Goal number={index + 1} text={goal.text} />;
        })}
      </div>
    </div>
  );
};

const Goal = (props) => {
  return (
    <Card
      style={{
        width: "800px",
        maxWidth: "80%",
        backgroundColor: "rgba(255,255,255,0.5)",
      }}
    >
      <div className="goal-container">
        <div className="goal-number">{props.number}</div>
        <div className="goal-text">{props.text}</div>
      </div>
    </Card>
  );
};

export default Goals;
