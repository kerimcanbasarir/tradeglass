import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Card from "../../components/Card";
function DetailsDescription() {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  return (
    <>
      <div className="row mt-3 ">
        <div className="col-md-12 mb-4 ">
          <Card>
            <div
              className={`card-header bg-${theme} text-${
                theme === "dark" ? "light" : "muted"
              }`}
            >
              <strong>{t("urun_aciklama")}</strong>
            </div>
            <div className={`card-body border-top bg-${theme}`}>
              <blockquote
                className={`blockquote mb-0 bg-${theme} text-${
                  theme === "dark" ? "light" : "muted"
                }`}
              >
                <p>
                  LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DetailsDescription;
