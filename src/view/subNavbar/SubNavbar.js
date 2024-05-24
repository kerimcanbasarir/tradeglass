import React from "react";

import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";

function SubNavbar(props) {
  let { showSearchBar } = props;

  return (
    <>
      <div className="row d-flex justify-content-between align-items-center">
        <SearchInput showSearchBar={showSearchBar} />
        <FilterBar />
      </div>
    </>
  );
}

export default SubNavbar;
