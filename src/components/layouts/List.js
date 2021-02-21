import React from "react";

const List = () => {
  const navNames = [
    { name: "Home", class: "first" },
    { name: "About Me", class: "second" },
    { name: "Skills", class: "third" },
    { name: "Projects", class: "fourth" },
    { name: "Contact", class: "fifth" },
  ];
  const list = navNames.map((item) => (
    <li key={item.name} className={`menu__item menu__item--${item.class}`}>
      {item.name}
    </li>
  ));
  return <ul className="menu__list">{list}</ul>;
};

export default List;
