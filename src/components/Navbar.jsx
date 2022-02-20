import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [navbarToggleState, setNavbarToggleState] = useState(false);
  const linksData = [
    {
      id: 1,
      urlLocation: "#hero",
      name: "Home",
    },
    {
      id: 2,
      urlLocation: "#services",
      name: "Services",
    },
    {
      id: 3,
      urlLocation: "#recommendations",
      name: "Places",
    },
    {
      id: 4,
      urlLocation: "#testimonials",
      name: "Testimonials",
    },
  ];

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travel.Lah
          </div>
          <div className="toggle">
            {navbarToggleState ? (
              <VscChromeClose
                className="close-btn"
                onClick={() => setNavbarToggleState(false)}
              />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarToggleState(true)} />
            )}
          </div>
        </div>
        <ul className="nav-list">
          {linksData.map((link, index) => {
            return (
              <li key={link.id}>
                <a
                  className={activeLink === index + 1 ? "active" : ""}
                  onClick={() => setActiveLink(index + 1)}
                  href={link.urlLocation}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="btn-login">Login</button>
      </Nav>
      <ResponsiveNav navbarState={navbarToggleState}>
        <ul className="nav-list">
          {linksData.map((link, index) => {
            return (
              <li key={link.id}>
                <a
                  onClick={() => setNavbarToggleState(false)}
                  href={link.urlLocation}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="btn-login">Login</button>
      </ResponsiveNav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
      .close-btn {
        color: #ff0000;
      }
    }
  }
  .nav-list {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      .active {
        color: #023e8a;
        font-weight: 700;
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    color: #ffffff;
    background-color: #48cae4;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    .nav-list {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: ${({ navbarState }) => (navbarState ? "50px" : "-400px")};
  padding: 1rem 2rem;
  width: 100%;
  height: 30vh;
  background-color: #ffffff;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s ease-in-out;
  .nav-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    li {
      a {
        text-decoration: none;
        font-size: 1rem;
        transition: 0.1rem ease-in-out;
        color: #0077b6;
        &:hover {
          color: #023e8a;
        }
      }
      .active {
        color: #023e8a;
        font-weight: 700;
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    color: #ffffff;
    background-color: #48cae4;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    &:hover {
      background-color: #023e8a;
    }
  }
`;

export default Navbar;
