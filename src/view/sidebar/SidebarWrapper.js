import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function SidebarWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`col-lg-3 rounded ${
          theme === "dark" ? "bg-dark" : "bg-white border"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default SidebarWrapper;
