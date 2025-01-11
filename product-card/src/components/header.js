import { useState } from "react";
import Menu from "./menu";
import Button from "./button";

export default function Header({ menuItems, onHandlePage }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav>
      <div className="logo">
        <h1>Product Cart</h1>
      </div>
      <ul className="desk-nav-links">
        {menuItems.map((el, index) => (
          <Menu
            key={index}
            onHandlePage={() => onHandlePage(el.name.toLowerCase())}
          >
            {el.name}
            <div className="border-b"></div>
          </Menu>
        ))}
      </ul>
      <div className="menu-icon">
        <Button onClick={handleOpenMenu}>
          <span
            dangerouslySetInnerHTML={{
              __html: isOpen ? "&#10006;" : "&#9776;",
            }}
          />
        </Button>
      </div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul className="mob-nav-links">
          {menuItems.map((el, index) => (
            <Menu
              key={index}
              onHandlePage={() => {
                onHandlePage(el.name.toLowerCase());
                setIsOpen(false);
              }}
            >
              {el.name}
              <div className="border-b"></div>
            </Menu>
          ))}
        </ul>
      </div>
    </nav>
  );
}
