import { create } from "zustand";

export const useCursorStore = create((set) => ({
  scale: 1,
  bg: "#05df72",
  color: "#fff",
  radius: 10,
  width: 10,
  height:10,
  // setPosition: (x, y) => set({ x, y }),
  setScale: (scale) => set({ scale }),
  setColors: (bg, color) => set({ bg, color }),
  setRadius: (radius) => set({ radius }),
  setSize: (width,height) => set({ width,height }),
}));

export const navLinks = [
  {
    id: 1,
    name: "Trainers",
  },
  {
    id: 2,
    name: "Pricing",
  },
  {
    id: 3,
    name: "Service",
  },
  {
    id: 4,
    name: "About",
  },
  {
    id: 5,
    name: "Contact",
  },
];


