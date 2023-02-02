import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const breakpoint = 992;

export default function NavBar() {
  const [showProfile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > breakpoint) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    let oldValue = 0;
    let newValue = 0;

    window.addEventListener("scroll", () => {
      // Get the new Value
      newValue = window.scrollY;

      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }

      // Update the old value
      oldValue = newValue;
    });

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-bar" style={show ? { top: 0 } : { top: -150 }}>
      {toggleMenu === false ? (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <GiHamburgerMenu className="menuIcon" />
        </button>
      ) : (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <ImCross className="menuIcon" />
        </button>
      )}
      <Link to="/">
        <img
          className="logo"
          alt="ChemicalDreams Logo"
          src="src/assets/chemicald-logo.svg"
        />
      </Link>
      {(toggleMenu || width > breakpoint) && (
        <ul className="liste">
          <li className="items">
            <Link to="/">Accueil</Link>
          </li>
          <li className="items">
            <Link to="/liste">Listes</Link>
          </li>
          <li className="items">A propos</li>
        </ul>
      )}
      <div className="button-right">
        <div>
          {showProfile && (
            <ul className="listProfile">
              <li className="itemsProfile">
                <button type="button">
                  <Link to="/profile" className="btn_listProfile">
                    Profil
                  </Link>
                </button>
              </li>
            </ul>
          )}
        </div>
        <Link to="/login">
          <CgProfile className="profile" />
        </Link>
      </div>
    </nav>
  );
}
