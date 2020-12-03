import { CHANGE_NAV_BG } from "./types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_NAV_BG:
      return {
        ...state,
        navbg: action.payload[0],
        bgvariant: action.payload[1]
      };
    default:
      return state;
  }
};
