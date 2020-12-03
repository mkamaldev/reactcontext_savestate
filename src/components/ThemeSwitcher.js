import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../context/themeContext";
const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);
  const { setNavBg } = themeContext;
  const changeToLight = () => {
    setNavBg("light");
  };
  const changeToPrimary = () => {
    setNavBg("primary");
  };
  const changeToDark = () => {
    setNavBg("dark");
  };
  return (
    <div className="d-flex m-3 align-items-center justify-content-between">
      <Button onClick={changeToPrimary} className="btn btn-primary">
        Switch To Primary
      </Button>
      <br /> <br />
      <Button onClick={changeToLight} className="btn btn-light">
        Switch To Light
      </Button>
      <br /> <br />
      <Button onClick={changeToDark} className="btn btn-dark">
        Switch To Dark
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
