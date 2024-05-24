import React from "react";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

function FilterBar() {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className=" col-lg-9 d-flex justify-content-end align-items-center mt-3"
        style={{ opacity: "70%" }}
      >
        <div className="me-3">
          <ul className="list-unstyled d-flex flex-wrap">
            <li
              className={`text-${theme === "light" ? "muted" : "light"} `}
              role="button"
            >
              <span className="fw-bold">
                <i className="fa-solid fa-star me-1"></i>
                {t("favori_araclarim")}
              </span>
            </li>
            <li
              className={`text-${theme === "light" ? "muted" : "light"} ms-3`}
              role="button"
            >
              <span className="fw-bold">
                {t("son_eklenenler")}
                <i className="fa-solid fa-angle-down ms-1"></i>
              </span>
            </li>
            <li
              className={`text-${theme === "light" ? "muted" : "light"} ms-3`}
              role="button"
            >
              <span>
                <i className="fa-solid fa-list"></i>
              </span>
            </li>
            <li
              className={`text-${theme === "light" ? "muted" : "light"} ms-3`}
              role="button"
            >
              <span>
                <i className="fa-solid fa-list-ul"></i>
              </span>
            </li>
            <li
              className={`text-${theme === "light" ? "muted" : "light"} ms-3`}
              role="button"
            >
              <span>
                <i className="fa-solid fa-grip"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
