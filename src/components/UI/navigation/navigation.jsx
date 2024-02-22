import React, { useEffect, useRef, useState } from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";
import PathConstants from "../../../routers/pathConstans";
import Login from "../login/login";

const navLinks = [
  {
    path: PathConstants.HOME,
    display: "Home",
  },
  {
    path: PathConstants.ABOUT,
    display: "About",
  },
  {
    path: PathConstants.CAR_LISTING,
    display: "Cars",
  },

  {
    path: PathConstants.BLOG,
    display: "Blog",
  },
  {
    path: PathConstants.CONTACT,
    display: "Contact",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    }
  });

  return (
    <div className="menu">
      <div className="content">
        <div ref={menuRef}>
          <div className="menu__mobile">
            <button className="btn menu__mobile--btn" type="button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <span><i className="ri-close-line"></i></span> : <span><i className="ri-menu-line"></i></span>}
            </button>
            <Login />
          </div>

          <div className={isOpen ? 'navigation navigation--active' : 'navigation'} >

            <div className="navigation__links">
              {navLinks.map((item, index) => (
                <NavLink to={item.path} key={index} className={(navClass) => navClass.isActive ? "navigation__item active" : "navigation__item"}>
                  {item.display}
                </NavLink>
              ))}
            </div>

            <div className="menu__search">
              <div className="menu__search-box">
                <input type="text" placeholder="Search" />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Nav;

