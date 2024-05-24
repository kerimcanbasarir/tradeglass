import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Card(props) {
  const { theme } = useContext(ThemeContext);

  let { style, className, children } = props;
  return (
    <>
      <div
        className={`card rounded  ${
          theme === "light" ? "bg-white border" : "bg-dark"
        } text-${theme === "dark" ? "light" : "dark"}  ${className}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
}

export default Card;
