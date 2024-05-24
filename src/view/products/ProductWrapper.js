import React from "react";

function ProductWrapper({ children }) {
  return (
    <>
      <div className="col-lg-9 d-flex justify-content-start align-items-center">
        <div className="col-lg-12 cardGroup ">{children}</div>
      </div>
    </>
  );
}

export default ProductWrapper;
