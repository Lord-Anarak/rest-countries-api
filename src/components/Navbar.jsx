import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../features/global";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.global.darkMode);

  return (
    <nav className="flex dark:bg-primary bg-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto">
        <h1 className="font-bold text-lg text-tertiary dark:text-white">
          Where in the world?
        </h1>
        <button
          className="text-sm flex items-center gap-2 text-tertiary dark:text-white"
          onClick={() => dispatch(setDarkMode())}
        >
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
