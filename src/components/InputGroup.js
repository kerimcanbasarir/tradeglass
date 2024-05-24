import React from "react";
import Input from "./Input";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import Label from "./Label";

function InputGroup(props) {
  let { label } = props;
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <hr className={`text-bg-${theme === "light" ? "white" : "dark"} `}></hr>
      <Label
        label={label}
        className={`mb-2 text-${theme === "light" ? "dark" : "light"}`}
        style={{ fontSize: "14px", fontWeight: "500" }}
      />
      <div className="input-group mb-3 ">
        <Input
          type={"number"}
          className={`form-control bg-${
            theme === "light" ? "white" : "dark"
          } text-bg-${theme}`}
          placeholder={t("en_dusuk")}
          ariaLabel={"Min Fiyat"}
          ariaDescribedby={"basic-addon2"}
          style={{ height: "50px" }}
        />
        <Input
          type={"number"}
          className={`form-control bg-${
            theme === "light" ? "white" : "dark"
          } text-bg-${theme}`}
          placeholder={t("en_yuksek")}
          ariaLabel={"En Fiyat"}
          ariaDescribedby={"basic-addon2"}
          style={{ height: "50px" }}
        />
      </div>
    </>
  );
}

export default InputGroup;
