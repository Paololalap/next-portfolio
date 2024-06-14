import Cookies from "js-cookie";
import { create } from "zustand";

// TODO:
/* function getInitialValueFromCookies() {
  const value = Cookies.get('toggleAnimation');
  if (value === undefined) {
    Cookies.set('toggleAnimation', 'true');
    return true;
  }
  return value === 'true';
} */

const useStore = create((set) => ({
  toggleAnimation: /* getInitialValueFromCookies() */ true,
  setToggleAnimation: (value) => {
    Cookies.set("toggleAnimation", value.toString());
    set({ toggleAnimation: value });
  },
}));

export default useStore;
