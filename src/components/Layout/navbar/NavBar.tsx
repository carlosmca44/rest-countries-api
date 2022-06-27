import React from "react";
import Moon from "../../svg/Moon";

const NavBar = () => {
  return (
    <nav>
      <p>
        <b>Where in the world?</b>
      </p>
      <div className="dark-mode-button">
        <Moon />
        Dark Mode
      </div>
    </nav>
  );
};

export default NavBar;
