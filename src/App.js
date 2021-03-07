import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layouts/Header";
import Navigation from "./components/layouts/Navigation";
import About from "./components/layouts/About";
import Skills from "./components/layouts/Skills";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";
// import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Navigation />
        <div className="wrapper">
          <div className="wrap">
            <About />
            <Skills />
          </div>
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </div>
      </>
    </Router>
  );
}

export default App;
