import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/layouts/Header/Header";
import Navigation from "./components/layouts/Navigation/Navigation";
import About from "./components/layouts/About/About";
import Skills from "./components/layouts/Skills/Skills";
import Projects from "./components/layouts/Project/Projects";
import Contact from "./components/layouts/Contact/Contact";
import Footer from "./components/layouts/Footer/Footer";
import ScrollSquare from "./components/layouts/ScrollSquare/ScrollSquare";

function App() {
  const [scrollSquare, setScrollSquare] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const sectionOne = document.querySelector(".project:nth-of-type(1)");
      const sectionTwo = document.querySelector(".project:nth-of-type(2)");
      const sectionThree = document.querySelector(".project:nth-of-type(3)");
      const sectionFour = document.querySelector(".project:nth-of-type(4)");

      const windowHeight = window.innerHeight;
      const scrollValue = window.pageYOffset;

      const sectionOneFromTop = sectionOne.offsetTop;
      const sectionOneHeight = sectionOne.clientHeight;

      const sectionTwoFromTop = sectionTwo.offsetTop;
      const sectionTwoHeight = sectionTwo.clientHeight;

      const sectionThreeFromTop = sectionThree.offsetTop;
      const sectionThreeHeight = sectionThree.clientHeight;

      const sectionFourFromTop = sectionFour.offsetTop;
      const sectionFourHeight = sectionFour.clientHeight;

      if (
        scrollValue >
        sectionOneFromTop + sectionOneHeight - windowHeight * 1.5
      ) {
        sectionOne.classList.add("show");
      }
      if (
        scrollValue >
        sectionTwoFromTop + sectionTwoHeight - windowHeight * 1.3
      ) {
        sectionTwo.classList.add("show");
      }
      if (
        scrollValue >
        sectionThreeFromTop + sectionThreeHeight - windowHeight * 1.5
      ) {
        sectionThree.classList.add("show");
      }
      if (
        scrollValue >
        sectionFourFromTop + sectionFourHeight - windowHeight * 1.3
      ) {
        sectionFour.classList.add("show");
      }
      if (scrollValue > windowHeight * 0.5) {
        setScrollSquare(scrollSquare === false);
      } else if (scrollValue < 100) {
        setScrollSquare(scrollSquare === true);
      }

      if (scrollValue < 100) {
        sectionOne.classList.remove("show");
        sectionTwo.classList.remove("show");
        sectionThree.classList.remove("show");
        sectionFour.classList.remove("show");
      }
    };
  }, []);

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
        {scrollSquare ? <ScrollSquare /> : null}
      </>
    </Router>
  );
}

export default App;
