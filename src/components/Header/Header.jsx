import { BiMenu } from "react-icons/bi";
import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Headers({
  toggle,
  setToggle,
  sticky,
  setSticky,
  setIsClicked,
}) {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleScrollToTop = () => {
    document.querySelector(".content-section").scrollTo(0, 0);
    setSticky(!sticky);
  };

  const scrollDown = () => {
    document.querySelector(".App").scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isCaseStudyPage = () => {
    return location.pathname.startsWith("/case-study");
  };

  return (
    <header className={sticky ? "sticky" : ""}>
      <div
        id="portrait"
        className={!sticky ? "hide" : "show"}
        onClick={() => handleScrollToTop()}
      ></div>
      <div id="mouse-icon" className={sticky ? "hide" : "show"}>
        <div
          id="mouse"
          onClick={() => {
            setSticky(!sticky);
            scrollDown();
          }}
        ></div>{" "}
      </div>
      <nav>
        <BiMenu
          className="hamburger"
          onClick={() => {
            setShow(!show);
          }}
        />
        <ul id={show ? "header-menu" : ""}>
          {isCaseStudyPage() ? (
            <li className="list">
              <Link
                className="header-link"
                onClick={() => {
                  setShow(false);
                  setIsClicked(true);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
          ) : (
            <>
              <li className="list">
                <Link
                  className="header-link"
                  to="/"
                  onClick={() => {
                    setShow(false);
                    scrollToSection("About");
                  }}
                >
                  About
                </Link>
              </li>
              <li className="list">
                <Link
                  className="header-link"
                  to="/"
                  onClick={() => {
                    setShow(false);
                    scrollToSection("Projects");
                  }}
                >
                  Projects
                </Link>
              </li>
            </>
          )}
          <li className="list">
            <a
              className="header-link"
              href=""
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setShow(false);
              }}
            >
              Contact me
            </a>
          </li>
          <li className="list" style={{ height: "100%" }}>
            <div id="toggle">
              <label
                className="switch"
                onClick={() => {
                  setShow(false);
                }}
              >
                <input
                  type="checkbox"
                  onClick={() => {
                    setToggle(!toggle);
                    setIsClicked(false);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
