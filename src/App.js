import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div style={{backgroundColor: "honeydew"}}>
      <Navbar />
      <Welcome />
      <About />
      <Coaches />
      <Services />
      <Partners />
      <Achievements />
      <Gallery />
      {/* <Legal /> */}
      <Goals />
      <Contacts />
    </div>
  );
}

export default App;
