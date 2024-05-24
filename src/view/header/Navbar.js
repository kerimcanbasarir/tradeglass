import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import ToggleButton from "../../components/ToggleButton";

function Navbar() {
  const menuList = [
    "acik_arttirma",
    "arac_al",
    "filonu_sat",
    "ekspertiz_al",
    "lojistik_al",
  ];
  const { handleClick, t, language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="col-lg-8 d-flex justify-content-end align-items-center">
        <div className="navbar navbar-expand-md mx-4 ">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <nav className="navbar-nav ">
              {menuList.map((item, index) => (
                <a
                  key={index}
                  className={`nav-link text-${
                    theme === "light" ? "muted" : "light"
                  }`}
                  aria-current="page"
                  href="a"
                  style={{ fontWeight: "500" }}
                >
                  {t(item)}
                </a>
              ))}

              <select
                className={` bg-${
                  theme === "light" ? "white" : "dark"
                } text-bg-${theme} mx-3`}
                value={language}
                onChange={(e) => handleClick(e.target.value)}
              >
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
              <div className="switch mt-1">
                <ToggleButton />
              </div>
            </nav>
          </div>
        </div>
        <div>
          <Link to={"/login"}>
            <Button text={t("giris_yap")} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
