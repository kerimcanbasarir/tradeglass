import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Products from "../products/Products";
import SubNavbar from "../subNavbar/SubNavbar";

function Content() {
  return (
    <>
      <SubNavbar showSearchBar={true} />
      <Sidebar />
      <Products />
    </>
  );
}

export default Content;
