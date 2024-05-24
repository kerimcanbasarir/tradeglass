import React from "react";

import ProductAlert from "./ProductAlert";
import ProductCards from "./ProductCards";
import ProductWrapper from "./ProductWrapper";

function Products() {
  return (
    <>
      <ProductWrapper>
        <ProductAlert />
        <ProductCards />
      </ProductWrapper>
    </>
  );
}

export default Products;
