import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Label(props) {
  let { label, className, style, htmlFor } = props;
  const { t } = useContext(LanguageContext);
  return (
    <>
      <label
        style={style}
        htmlFor={htmlFor}
        className={`form-label ${className}`}
      >
        {t(label)}
      </label>
    </>
  );
}

export default Label;
