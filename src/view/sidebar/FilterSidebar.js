import React from "react";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import Label from "../../components/Label";

function FilterSidebar() {
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const { data } = useSelector((state) => state.product);

  const categoryItems = data
    ? [...new Set(data.map((val) => val.category))]
    : [];

  return (
    <>
      <div className="row d-flex justify-content-start align-items-start ">
        <div className="col-lg-12 d-flex flex-column justify-content-start ">
          <Label
            className={`mt-2 text-${theme === "dark" ? "white" : "dark"} `}
            label={"Marka"}
            style={{ fontSize: "14px", fontWeight: "500" }}
          />
          <div className="input-group d-flex justify-content-start flex-column">
            <ul className="px-3">
              {categoryItems.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <Input
                    className={`form-check-input bg-${
                      theme === "light" ? "" : "dark"
                    } `}
                    type="checkbox"
                    value={item}
                    id={item}
                    name={item}
                    label={item}
                    htmlFor={item}
                  />
                  <Label
                    label={item}
                    value={item}
                    style={{ fontSize: "14px" }}
                    className={`form-check-label stretched-link px-2 text-${
                      theme === "light" ? "muted" : "light"
                    }`}
                    htmlFor={item}
                  ></Label>
                </li>
              ))}
            </ul>
          </div>
          <InputGroup label={t("Fiyat")} />
          <InputGroup label={t("Model")} />
          <InputGroup label={t("Km")} />
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;
