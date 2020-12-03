import React from "react";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeState from "./context/ThemeState";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <ThemeState>
      <Navbar />
      <div className="container">
        <p style={{ fontSize: "16px", textAlign: "center", margin: "35px 0" }}>
          When you change the navbar style, it will be saved !
        </p>
        <ThemeSwitcher />
      </div>
    </ThemeState>
  );
}
