import { navLinks } from "../constants";
import { contact } from "../constants";

const Contacts = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "contacts").title}
      </h1>
      <div>
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
      {props.email && (
        <p>
          <i class="material-icons">email</i>
          {props.email}
        </p>
      )}
      {props.phone && (
        <p>
          <i class="material-icons">phone</i>
          {props.phone}
        </p>
      )}
    </div>
  );
};

export default Contacts;
