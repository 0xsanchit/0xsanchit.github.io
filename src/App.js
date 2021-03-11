import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import About from "./Components/About";
import Experience from "./Components/Experience";
// import RenderCard from "./Components/Card";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
