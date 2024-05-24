import React from "react";
import Image from "../../components/Image";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Button from "../../components/Button";
import Card from "../../components/Card";
function DetailsCard(props) {
  let { data } = props;

  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  return (
    <>
      <div className="row">
        <div className="col-md-6 ">
          <Image src={`${data.image}`} />
        </div>
        <div className="col-md-6">
          <Card style={{ height: "100%" }}>
            <div
              className={`card-header bg-${theme} text-${
                theme === "light" ? "dark" : "light"
              }`}
            >
              {" "}
              <h3 ClassName=" card-title my-4">
                {data.category} {""}
                {data.name} - {data.model}
              </h3>
            </div>
            <div className={`card-body bg-${theme}`}>
              <table className={`table table-${theme}  table-striped`}>
                <tbody>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_kategori")}:
                    </th>
                    <td>{data.category}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_adi")}:
                    </th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_model")}:
                    </th>
                    <td>{data.model}</td>
                  </tr>
                  <tr>
                    <th scope="row" className=" fs-5">
                      {t("urun_uretim_yili")}:
                    </th>
                    <td>{data.product_year}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_km")}:
                    </th>
                    <td>{data.km}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_vites")}:
                    </th>
                    <td>{data.gear}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_yakit")}:
                    </th>
                    <td>{data.fuel}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-5">
                      {t("urun_kdv")}:
                    </th>
                    <td>{data.KDV_percentage}%</td>
                  </tr>
                </tbody>
              </table>

              <div className="row mx-1">
                <div className="col-md-12 d-flex flex-column align-items-end justify-content-end ">
                  <small
                    className={`card-title text-${
                      theme === "dark" ? "light" : "dark"
                    }`}
                    style={{ fontSize: "10px", opacity: "0.5" }}
                  >
                    {t("satis_fiyati")} / TL{" "}
                    <i className="fa-solid fa-circle-info"></i>
                  </small>
                  <h4
                    className="card-text fw-bold mb-2"
                    style={{ color: "#09aa59" }}
                  >
                    {data.price} ₺
                  </h4>
                  <Button text={t("hemen_al")} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
