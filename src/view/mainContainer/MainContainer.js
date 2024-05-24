import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function MainContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column  bg-${
          theme === "dark" ? "black" : "light"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <div className={`container bg-${theme === "dark" ? "black" : "light"}`}>
          <div className="row d-flex p-2 justify-content-between align-items-start">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
