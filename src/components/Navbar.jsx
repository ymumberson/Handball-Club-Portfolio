import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="#welcome" className="navMenuText">TODO_LOGO</a>
          <ul className={`navMenu ${isActive ? "active" : ""}`} >
            {navLinks.map((link) => {
              return (
                <li key={link.id} onClick={removeActive}>
                  <a href={`#${link.id}`} className="navMenuText">{link.title}</a>
                </li>
              );
            })}
          </ul>
          <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
