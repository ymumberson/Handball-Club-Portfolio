import { navLinks } from "../constants";
import { aboutUs } from "../constants";

const InfoSection = (props) => {
  return (
    <div className="info-section">
      <div className="info-section-container">
        <h2 className="subsection-header info-section-header"> {props.title} </h2>
        <p className="subsection-text info-section-text">{props.text}</p>
      </div>

      <div style={{ justifyContent: "center", display: "flex", alignItems: "center"}}>
        <img className="info-section-image" src={props.image} />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-section">
      <h1 className="section-header">{navLinks.find(item => item.id === "about").title}</h1>
      {aboutUs.map((about) => {
              return (
                <InfoSection title={about.title} text={about.text} image={about.image}/>
              );
            })}
    </div>
  );
};

export default About;
