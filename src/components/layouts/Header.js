import React, { useEffect } from "react";

import BackgroundImage from "../pages/BackgroundImage";

const Header = () => {
  useEffect(() => {
    setTimeout(showText, 1000);
  }, []);

  const showText = () => {
    const headerWelcome = document.querySelector(".header__welcome");
    const headerTitle = document.querySelector(".header__title");
    const headerSpan = document.querySelector(".header__span");
    headerWelcome.style.opacity = 1;
    headerTitle.style.opacity = 1;
    headerSpan.style.opacity = 1;
  };
  return (
    <>
      <div className="header">
        <p className="header__welcome">Hello !</p>
        <h1 className="header__title">I'm Lukasz Adamczyk</h1>
        <p className="header__span">Web Developer</p>
      </div>
      <BackgroundImage />
    </>
  );
};

export default Header;
