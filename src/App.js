import "./App.css";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import HeaderNav from "./components/HeaderNav";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <About />
      <Services />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
