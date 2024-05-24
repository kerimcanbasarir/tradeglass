import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Input from "../../components/Input";

function SearchInput(props) {
  const { setSearch } = useContext(SearchContext);
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  let { showSearchBar } = props;
  return (
    <>
      <div className="col-lg-3  justify-content-start align-items-center mt-3">
        <form
          style={{ width: "326px", maxWidth: "100%" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          {showSearchBar ? (
            <Input
              type={"search"}
              name={"search"}
              className={`form-control mb-3 ${
                theme === "light" ? "bg-white border" : "bg-dark border-0 "
              }`}
              placeholder={t("arama")}
              ariaLabel={"Search"}
            />
          ) : null}
        </form>
      </div>
    </>
  );
}

export default SearchInput;
