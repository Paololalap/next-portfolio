import { create } from "zustand";

const useStore = create((set) => ({
  toggleAnimation: true,
  setToggleAnimation: (value) => {
    set({ toggleAnimation: value });
  },
}));

export default useStore;
