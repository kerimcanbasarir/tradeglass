import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
function BreadCrumb(props) {
  let { category, name } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className={`breadcrumb-item`}>
            <Link
              className={`text-${theme === "light" ? "dark" : "light"}`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li
            className={`breadcrumb-item active text-${
              theme === "light" ? "dark" : "light"
            }`}
            aria-current="page"
          >
            {`${category} ${name}`}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
