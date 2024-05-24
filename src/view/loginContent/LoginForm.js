import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Label from "../../components/Label";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

function LoginForm() {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h3 className="card-title fw-bold ">{t("giris_yap")}</h3>
            <p className="fw-bold link-secondary mt-4">{t("giris_info")}</p>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-12 mt-4">
              <Label label={"e-Mail"} />
              <Input
                type={"text"}
                className={`form-control mb-4 bg-${
                  theme === "light" ? "white" : "dark"
                }`}
                placeholder={"email@example.com"}
                ariaDescribedby={"basic-addon2"}
                style={{ height: "50px" }}
              />
              <Label label={"password"} />
              <Input
                type={"password"}
                className={`form-control mb-4 bg-${
                  theme === "light" ? "white" : "dark"
                }`}
                placeholder={"password"}
                ariaDescribedby={"basic-addon2"}
                style={{ height: "50px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-4 d-flex flex-column  align-items-center justify-content-center ">
              <Button text={t("giris_yap")} className={"w-100 "} />

              <p className="mt-4 fs-5">
                {t("kayit_bilgi")}{" "}
                <Link
                  className="fs-5"
                  to={"/register"}
                  style={{ color: "#09aa59" }}
                  s
                >
                  {t("kayit_ol")}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
