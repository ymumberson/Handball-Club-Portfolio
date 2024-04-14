import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./assets/pexels-codioful-formerly-gradienta-7130534.jpg";

import {
  About,
  Achievements,
  Coaches,
  Contacts,
  Gallery,
  Goals,
  Legal,
  Navbar,
  Partners,
  Services,
  Welcome,
} from "./components";

function App() {
  return (
    // <div style={{backgroundImage: `url(${background})`}}>
    <div style={{ backgroundColor: "honeydew" }}>
      <section id="welcome">
        <Navbar />
        <Welcome />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="coaches">
        <Coaches />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="goals">
        <Goals />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
