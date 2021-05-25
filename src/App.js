import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layouts/Header/Header";
import Navigation from "./components/layouts/Navigation/Navigation";
import About from "./components/layouts/About/About";
import Skills from "./components/layouts/Skills/Skills";
import Projects from "./components/layouts/Project/Projects";
import Contact from "./components/layouts/Contact/Contact";
import Footer from "./components/layouts/Footer/Footer";

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
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
