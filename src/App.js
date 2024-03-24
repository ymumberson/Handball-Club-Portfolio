import logo from "./logo.svg";
import "./App.css";
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Coaches />
      <Services />
      <Partners />
      <Achievements />
      <Gallery />
      <Legal />
      <Goals />
      <Contacts />
    </div>
  );
}

export default App;
