import { create } from "zustand";

const useStore = create((set) => ({
  toggleAnimation: getInitialValue(),
  setToggleAnimation: (value) => {
    set({ toggleAnimation: value });
    localStorage.setItem("toggleAnimation", value);
  },
}));

function getInitialValue() {
  const storedValue = localStorage.getItem("toggleAnimation");
  if (storedValue === null) {
    localStorage.setItem("toggleAnimation", "true");
    return true;
  }
  return storedValue === "true";
}

export default useStore;
