import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import { useEffect, useState } from "react";
import React from "react";
import RingLoader from "react-spinners/RingLoader";
import { Container } from "@material-ui/core";
import { Element } from "react-scroll";

// import RenderCard from "./Components/Card";

function App() {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FF0009");

  useEffect(() => {
    setLoading(true);
    document.title = "Sanchit Gupta";
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className="loader">
          <RingLoader
            color={color}
            loading={loading}
            size={300}
            height={300}
            width={100}
          />
        </div>
      ) : (
        <div>
          <Nav />
          <Banner />
          <About />
          <Services />
          <Element id="experience" name="experience">
            <Experience />{" "}
          </Element>

          <ContactUs />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
