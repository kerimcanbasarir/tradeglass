import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

function RegisterForm() {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h3 className="card-title fw-bold ">{t("kayit_ol")}</h3>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-12 mt-4">
              <Label label={"kayit_ad"} />
              <Input
                type={"text"}
                placeholder={"John"}
                className={`form-control mb-4 bg-${
                  theme === "light" ? "white" : "dark"
                }`}
                ariaDescribedby={"basic-addon2"}
                style={{ height: "50px" }}
              />
              <Label label={"kayit_soyad"} />
              <Input
                type={"text"}
                placeholder={"Doe"}
                className={`form-control mb-4 bg-${
                  theme === "light" ? "white" : "dark"
                }`}
                ariaDescribedby={"basic-addon2"}
                style={{ height: "50px" }}
              />
              <Label label={"kayit_telefon"} />
              <Input
                type={"text"}
                className={`form-control mb-4 bg-${
                  theme === "light" ? "white" : "dark"
                }`}
                ariaDescribedby={"basic-addon2"}
                placeholder={"0(5xx) xxx xx xx"}
                style={{ height: "50px" }}
              />
              <Label label={"E-Mail"} />
              <Input
                label={"E-Mail"}
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

          <div className="row  ">
            <div className="col-md-12 mb-4 d-flex flex-column  align-items-center justify-content-center ">
              <Button text={t("kayit_ol")} className={"w-100 "} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
