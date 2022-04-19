import { writable } from "svelte/store";

const createTheme = () => {
  const { subscribe, set } = writable<"light" | "dark">("light");

  const setTheme = (style: "light" | "dark") => {
    set(style);
  };

  return {
    subscribe,
    set: setTheme,
  };
};

export default createTheme();
