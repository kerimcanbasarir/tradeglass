import React from "react";

import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/app/features/product/productSlice";
import ProductCardItem from "../../components/ProductCardItem";
import { SearchContext } from "../../context/SearchContext";

function ProductCards() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { t } = useContext(LanguageContext);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="m-1">
          <div className="spinner-border" role="status"></div>

          <span className="h5 mx-2">{t("yukleniyor")}</span>
        </div>
      ) : null}
      {error ? <div className="m-1">{error}</div> : null}

      {data &&
        data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.category.toLowerCase().includes(search) ||
                  item.name.toLowerCase().includes(search);
          })

          .map((item, index) => (
            <ProductCardItem
              key={index}
              id={item.id}
              img={item.image}
              category={item.category}
              name={item.name}
              model={item.model}
              price={item.price}
              productYear={item.product_year}
              km={item.km}
              gear={item.gear}
              fuel={item.fuel}
              kdv={item.KDV_percentage}
            />
          ))}
    </>
  );
}

export default ProductCards;
