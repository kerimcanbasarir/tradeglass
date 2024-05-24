import React from "react";
import Button from "./Button";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import Image from "./Image";

function ProductCardItem(props) {
  let {
    id,
    img,
    name,
    model,
    price,
    productYear,
    km,
    gear,
    fuel,
    kdv,
    category,
  } = props;

  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Link to={`/details/${id}`} style={{ textDecorationLine: "none" }}>
        <div
          className={`card mb-3 text-bg-${theme} ${
            theme === "dark" ? "bg-dark" : "bg-white border"
          } `}
        >
          <div className="row g-0">
            <div className="d-flex col-lg-2  ">
              <Image src={img} className={"rounded-start "} />
            </div>
            <div className="col-lg-8">
              <div className="card-body d-flex justify-content-start flex-column">
                <h5 className="card-title">
                  {`${category} ${name}`}
                  <i
                    className="fa-solid fa-star"
                    style={{ opacity: "0.5" }}
                  ></i>
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "12px", opacity: "0.7" }}
                >
                  {model}
                </p>
                <div className="car-info card-text d-flex flex-column justify-content-start align-items-start">
                  <ul className="list-unstyled d-flex flex-wrap mt-4 ">
                    <li
                      className={`text-${
                        theme === "light" ? "muted" : "light"
                      } `}
                    >
                      {productYear}
                    </li>
                    <li
                      className={`text-${
                        theme === "light" ? "muted" : "light"
                      } ms-2`}
                    >
                      {km}KM
                    </li>
                    <li
                      className={`text-${
                        theme === "light" ? "muted" : "light"
                      } ms-2`}
                    >
                      {gear}
                    </li>
                    <li
                      className={`text-${
                        theme === "light" ? "muted" : "light"
                      } ms-2`}
                    >
                      {fuel}
                    </li>
                    <li
                      className={`text-${
                        theme === "light" ? "muted" : "light"
                      } ms-2`}
                    >
                      KDV %{kdv}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex flex-column justify-content-end align-items-end ">
              <div className="card-body d-flex flex-column align-items-end ">
                <small
                  className="card-title"
                  style={{ fontSize: "10px", opacity: "0.5" }}
                >
                  {t("satis_fiyati")} / TL{" "}
                  <i className="fa-solid fa-circle-info"></i>
                </small>
                <h6 className="card-text fw-bold mb-4">
                  {price.toLocaleString("tr-TR")}
                </h6>
                <Button text={t("hemen_al")} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCardItem;
