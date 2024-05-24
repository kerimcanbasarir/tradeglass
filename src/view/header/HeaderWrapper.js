import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function HeaderWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`container-fluid ${
          theme === "dark" ? "bg-dark" : "bg-white border-bottom"
        } `}
      >
        <div className="container">
          <div className="row d-flex p-2 justify-content-around align-items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderWrapper;
