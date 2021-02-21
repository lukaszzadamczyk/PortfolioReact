import React, { useState } from "react";

import List from "./List";

const Navigation = () => {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive(!active);
  };

  const handleShowMenu = () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const list = document.querySelectorAll(".menu__item");
    const item1 = document.querySelector(".menu__item--first");
    const item2 = document.querySelector(".menu__item--second");
    const item3 = document.querySelector(".menu__item--third");
    const item4 = document.querySelector(".menu__item--fourth");
    const item5 = document.querySelector(".menu__item--fifth");

    if (active) {
      burger.style.transform = "rotate(-45deg)";
      menu.style.width = "100%";
      item1.style.transition = "0.5s linear 0.5s";
      item2.style.transition = "0.5s linear 1s";
      item3.style.transition = "0.5s linear 1.5s";
      item4.style.transition = "0.5s linear 2s";
      item5.style.transition = "0.5s linear 2.5s";
      list.forEach((item) => {
        item.style.opacity = 1;
      });
    } else if (!active) {
      burger.style.transform = "rotate(0deg)";
      menu.style.width = "0";
      list.forEach((item) => {
        item.style.opacity = 0;
        item.style.transition = ".01s";
      });
    }
    changeActive();
  };

  return (
    <>
      <div onClick={handleShowMenu} className="burger">
        +
      </div>
      <nav className="menu">
        <div className="menu__logo">LA</div>
        <List />
      </nav>
    </>
  );
};

export default Navigation;
