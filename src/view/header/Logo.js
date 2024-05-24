import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import logo from "../../assets/img/new_logo.png";
function Logo() {
  return (
    <>
      <div className="col-lg-4">
        <Link className="navbar-brand" to="/">
          <Image
            src={logo}
            style={{ maxWidth: "40%" }}
            alt={"Logo"}
            width={"100%"}
          />
        </Link>
      </div>
    </>
  );
}

export default Logo;
