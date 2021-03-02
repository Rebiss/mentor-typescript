// @ts-ignore
import React from "react";

const Navbar: React.FC = (): any => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-3 px1">
        <a href="/" className="brand-logo">
          Learn TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html"> List </a>
          </li>
          <li>
            <a href="badges.html"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
