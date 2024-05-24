import React from "react";

import LoginCard from "./LoginCard";
import LoginForm from "./LoginForm";

function LoginContent() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center mt-5">
          <LoginCard>
            <LoginForm />
          </LoginCard>
        </div>
      </div>
    </>
  );
}

export default LoginContent;
