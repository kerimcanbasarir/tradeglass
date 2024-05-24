import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumb from "../../components/BreadCrumb";
import DetailsCard from "./DetailsCard";
import DetailsDescription from "./DetailsDescription";

function DetailsContent() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(`http://localhost:8080/cars/${id}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    getData();
  }, [id]);
  return (
    <>
      {data ? (
        <div className="container">
          <BreadCrumb category={data.category} name={data.name} />
          <DetailsCard data={data} />
          <DetailsDescription />
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </>
  );
}

export default DetailsContent;
