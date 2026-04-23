import React from "react";
import logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} />
      <h1>Quiz Time</h1>
    </header>
  );
}

export default Header;
