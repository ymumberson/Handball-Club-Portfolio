import { navLinks } from "../constants";
import { coaches } from "../constants";
import Card from "react-bootstrap/Card";

const Coaches = () => {
  return (
    <div className="coaches-section">
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "coaches").title}
      </h1>
      <div className="coaches-card-section">
        {coaches.map((coach) => {
          return (
            <Card style={{ width: "18rem", background: "azure" }}>
              <Card.Img
                variant="top"
                src={coach.img}
                style={{
                  borderRadius: "60%",
                  width: "70%",
                  height: "70%",
                  margin: "0 auto",
                  paddingTop: "24px",
                }}
              />
              <Card.Body>
                <div
                  style={{
                    borderLeft: "2px lightGrey solid",
                    paddingLeft: "10px",
                  }}
                >
                  <Card.Title style={{ margin: "0px" }}>
                    {coach.name}
                  </Card.Title>
                  <Card.Text style={{ margin: "0px" }}>{coach.title}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Coaches;
