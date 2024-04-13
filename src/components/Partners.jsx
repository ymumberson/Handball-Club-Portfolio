import { navLinks } from "../constants";
import { partners } from "../constants";
import { partnersNoImage } from "../constants";

const PartnerImage = (props) => {
  return <img className="partner-image" src={props.src} alt={props.alt} />;
};

const PartnerText = (props) => {
  return <h2>{props.text}</h2>;
};

const Partners = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "partners").title}
      </h1>
      <div className="partners-section">
        <div className="partners-image-container">
          {partners.map((partner) => {
            return <PartnerImage src={partner.img} alt={partner.name} />;
          })}
        </div>
        <div className="partners-text-container">
          {partnersNoImage.map((partner) => {
            return <PartnerText text={partner.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
