import { create } from "zustand";

interface AnimationStore {
  toggleAnimation: boolean;
  setToggleAnimation: (value: boolean) => void;
}

const useStore = create<AnimationStore>((set) => ({
  toggleAnimation: true,
  setToggleAnimation: (value: boolean) => {
    set({ toggleAnimation: value });
  },
}));

export { useStore };