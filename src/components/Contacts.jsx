import { navLinks } from "../constants";
import { contact } from "../constants";

const Contacts = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "contacts").title}
      </h1>
      <div className="contacts-section">
        {contact.map((contact) => {
          return (
            <Contact
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = (props) => {
  return (
    <div className="contact-container">
      <h2 className="subsection-header">{props.name}</h2>
      <ContactComponent iconKey="email" contactValue={props.email} />
      <ContactComponent iconKey="phone" contactValue={props.phone} />
    </div>
  );
};

const ContactComponent = (props) => {
  if (props.contactValue) {
    return (
      <p className="contact-component-container">
        <i className="material-icons">{props.iconKey}</i>
        {props.contactValue}
      </p>
    );
  } else {
    return null;
  }
};

export default Contacts;
