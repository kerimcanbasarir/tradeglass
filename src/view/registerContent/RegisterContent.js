import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

import RegisterCard from "./RegisterCard";
import RegisterForm from "./RegisterForm";

function RegisterContent() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center mt-5">
          <RegisterCard>
            <RegisterForm />
          </RegisterCard>
        </div>
      </div>
    </>
  );
}

export default RegisterContent;
