import React from "react";

function Input(props) {
  let {
    className,
    type,
    name,
    placeholder,
    ariaLabel,
    style,
    ariaDescribedby,
    value,
    id,
    htmlFor,
  } = props;

  return (
    <>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={ariaLabel}
        style={style}
        aria-describedby={ariaDescribedby}
        value={value}
        id={id}
        htmlFor={htmlFor}
      />
    </>
  );
}

export default Input;
