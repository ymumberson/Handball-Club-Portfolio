import { navLinks } from "../constants";
import { services } from "../constants";

const Services = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "services").title}
      </h1>
      <div className="services-section">
        <div className="divider" />
        {services.map((service) => {
            return (
             <Service title={service.title} text={service.text}/>
            )
        })}
        <div className="divider" />
      </div>
    </div>
  );
};

const Service = (props) => {
  return (
    <div className="service-container">
      <h2 className="subsection-header service-container-title">{props.title}</h2>
      <p className="subsection-text service-container-text">{props.text}</p>
    </div>
  );
};

export default Services;
