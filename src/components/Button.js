import React from "react";

function Button(props) {
  let { text, className } = props;
  return (
    <>
      <button
        type="button"
        className={`buy-btn btn btn-success btn-sm rounded-pill px-3 ${className}`}
      >
        <strong>{text}</strong>
      </button>
    </>
  );
}

export default Button;
