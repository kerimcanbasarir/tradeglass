import React from "react";

function Image(props) {
  let { src, className, alt, style, width } = props;
  return (
    <>
      <img
        className={`img-fluid ${className}`}
        src={src}
        alt={alt}
        style={style}
        width={width}
      />
    </>
  );
}

export default Image;
