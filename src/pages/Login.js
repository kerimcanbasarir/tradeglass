import React from "react";

import MainContainer from "../view/mainContainer/MainContainer";
import LoginContent from "../view/loginContent/LoginContent";
import Header from "../view/header/Header";

function Login() {
  return (
    <>
      <Header />
      <MainContainer>
        <LoginContent />
      </MainContainer>
    </>
  );
}

export default Login;
