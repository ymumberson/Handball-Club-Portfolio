import { useState } from "react";
import { styles } from "../styles";
import { navLinks, teamLogo} from "../constants";

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
    <div id="navbar" className="sticky">
      <header>
        <nav className="navbar">
          <a href="#" className="navMenuText"><img className="team-logo" src={teamLogo} alt="Team Logo"/></a>
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
