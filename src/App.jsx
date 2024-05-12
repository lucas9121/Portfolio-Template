import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Hero from "./components/Hero/Hero";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!sticky) {
      document.querySelector(".App").scrollTo(0, 0);
    }
  }, [sticky]);

  const handleScroll = (evt) => {
    const scrollTop = evt.currentTarget.scrollTop;
    if (scrollTop > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <div
      className={toggle ? "App AppNight" : "App"}
      onScroll={(evt) => {
        handleScroll(evt);
      }}
    >
      <Header
        toggle={toggle}
        setToggle={setToggle}
        sticky={sticky}
        setSticky={setSticky}
        setIsClicked={setIsClicked}
      />
      <Hero sticky={sticky} />
      <Routes>
        <Route
          path="/"
          element={<Main toggle={toggle} isClicked={isClicked} />}
        />
        <Route
          path="/case-study/:name"
          element={<CaseStudy toggle={toggle} isClicked={isClicked} />}
        />
      </Routes>
    </div>
  );
}
