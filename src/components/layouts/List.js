import React from "react";

const List = () => {
  const navNames = [
    { id: 1, name: "Home", class: "first" },
    { id: 2, name: "About Me", class: "second" },
    { id: 3, name: "Skills", class: "third" },
    { id: 4, name: "Projects", class: "fourth" },
    { id: 5, name: "Contact", class: "fifth" },
  ];
  const list = navNames.map((item) => (
    <li key={item.id} className={`menu__item menu__item--${item.class}`}>
      <a className="menu__link" href={`#${item.class}`}>
        {item.name}
      </a>
    </li>
  ));
  return <ul className="menu__list">{list}</ul>;
};

export default List;
