import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { HiSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";
function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <span role={"button"} onClick={toggleTheme}>
        {theme === "light" ? (
          <IoMoonSharp size={20} color="gray" />
        ) : (
          <HiSun size={25} color="gray" />
        )}
      </span>
    </div>
  );
}

export default ToggleButton;
