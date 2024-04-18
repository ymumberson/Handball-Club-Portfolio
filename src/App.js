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
  Footer
} from "./components";



function App() {
  return (
    // <div style={{backgroundImage: `url(${background})`}}>
    <div style={{ backgroundColor: "honeydew" }}>
      <section id="/">
        <Navbar />
      </section>
      <section id="welcome" className="section-container">
        <Welcome />
      </section>
      <section id="about" className="section-container">
        <About />
      </section>
      <section id="coaches" className="section-container">
        <Coaches />
      </section>
      <section id="services" className="section-container">
        <Services />
      </section>
      <section id="partners" className="section-container">
        <Partners />
      </section>
      <section id="achievements" className="section-container">
        <Achievements />
      </section>
      <section id="gallery" className="section-container">
        <Gallery />
      </section>
      <section id="goals" className="section-container">
        <Goals />
      </section>
      <section id="contacts" className="section-container">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
