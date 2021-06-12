import React, { useState } from "react";

import List from "../List/List";

const Navigation = () => {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive(!active);
  };

  const handleShowMenu = () => {
    const burger = document.querySelector(".burger");
    const barsIcon = document.querySelector(".fa-bars");
    const barsX = document.querySelector(".fa-times");
    const menu = document.querySelector(".menu");
    const list = document.querySelectorAll(".menu__item");
    const item1 = document.querySelector(".menu__item--first");
    const item2 = document.querySelector(".menu__item--second");
    const item3 = document.querySelector(".menu__item--third");
    const item4 = document.querySelector(".menu__item--fourth");
    const item5 = document.querySelector(".menu__item--fifth");

    if (active) {
      burger.style.color = "#F2F2F2";
      barsX.style.display = "block";
      barsIcon.style.display = "none";
      menu.style.width = "100%";
      menu.style.zIndex = "99";
      item1.style.transition = "0.5s linear 0.3s";
      item2.style.transition = "0.5s linear 0.6s";
      item3.style.transition = "0.5s linear 0.9s";
      item4.style.transition = "0.5s linear 1.2s";
      item5.style.transition = "0.5s linear 1.5s";
      list.forEach((item) => {
        item.style.opacity = 1;
      });
    } else if (!active) {
      burger.style.color = "#0583F2";
      barsX.style.display = "none";
      barsIcon.style.display = "block";
      menu.style.width = "0";
      menu.style.zIndex = "-1";
      list.forEach((item) => {
        item.style.opacity = 0;
        item.style.transition = ".01s";
      });
    }
    changeActive();
  };

  const handleItemClick = () => {
    if (window.innerWidth < 1024) {
      const list = document.querySelectorAll(".menu__item");
      const menu = document.querySelector(".menu");
      const burger = document.querySelector(".burger");
      const barsIcon = document.querySelector(".fa-bars");
      const barsX = document.querySelector(".fa-times");
      setTimeout(() => waitTime(menu, list, burger, barsIcon, barsX), 1000);

      changeActive();
    }
  };

  const waitTime = (menu, list, burger, barsIcon, barsX) => {
    menu.style.width = "0";
    menu.style.zIndex = "-1";
    barsIcon.style.display = "block";
    burger.style.color = "#0583F2";
    barsX.style.display = "none";
    list.forEach((item) => {
      item.style.opacity = 0;
      item.style.transition = ".01s";
    });
  };

  return (
    <>
      <div onClick={handleShowMenu} className="burger">
        <span className="fas fa-bars"></span>
        <span className="fas fa-times"></span>
      </div>
      <nav className="menu">
        <div className="menu__logo">LA</div>
        <List click={handleItemClick} />
      </nav>
    </>
  );
};

export default Navigation;
