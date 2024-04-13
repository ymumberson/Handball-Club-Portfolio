import { navLinks } from "../constants";
import { achievementsList } from "../constants";

const Achievements = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "achievements").title}
      </h1>
      <div className="achievements-container">
        {achievementsList.map((item) => {
          return <AchievementList title={item.title} list={item.dates} />;
        })}
      </div>
    </div>
  );
};

const AchievementList = (props) => {
  return (
    <div className="achievement-list-container">
      <h2 className="subsection-header achievement-list-container-header">{props.title}</h2>
      <ul className="achievement-list-container-ul">
        {props.list.map((item) => {
          return (
            <li>
              {item.date}
              <ul className="">
                {item.achievements.map((item) => {
                  return <li>{item.achievement}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Achievements;
