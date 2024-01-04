import React, { useEffect, useRef } from "react";
import Navbar from './Navbar';
//import "bootstrap/dist/css/bootstrap.min.css";
import './Css/App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';




function App() {

  useEffect(() => {
    document.title = "Portfolio"
  }, []);
  
  
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;