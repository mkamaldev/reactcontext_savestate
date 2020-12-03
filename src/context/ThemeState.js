import React, { useReducer } from "react";
import ThemeContext from "../context/themeContext";
import ThemeReducer from "../context/themeReducer";

import { CHANGE_NAV_BG } from "./types";

const ThemeState = (props) => {
  const initialState = {
    navbg: localStorage.getItem("navbg") || null,
    bgvariant: localStorage.getItem("bgvariant") || null
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const setNavBg = (bg_name) => {
    var navbar_bg = [];
    switch (bg_name) {
      case "primary":
        navbar_bg = ["primary", "dark"];
        break;
      case "dark":
        navbar_bg = ["dark", "dark"];
        break;
      case "light":
        navbar_bg = ["light", "light"];
        break;
      default:
        return true;
    }

    dispatch({
      type: CHANGE_NAV_BG,
      payload: navbar_bg
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        navbg: state.navbg,
        bgvariant: state.bgvariant,
        setNavBg
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
