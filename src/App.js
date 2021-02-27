import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layouts/Header";
import Navigation from "./components/layouts/Navigation";
import About from "./components/layouts/About";
import Skills from './components/layouts/Skills';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Navigation />
        <div className="wrap">
          <About />
          <Skills/>
        </div>
      </>
    </Router>
  );
}

export default App;
