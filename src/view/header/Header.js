import React from "react";

import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderWrapper from "./HeaderWrapper";
function Header() {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Navbar />
      </HeaderWrapper>
    </>
  );
}

export default Header;
