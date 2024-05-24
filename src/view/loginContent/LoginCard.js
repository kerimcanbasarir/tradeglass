import React from "react";

import Card from "../../components/Card";

function LoginCard({ children }) {
  return (
    <>
      <Card style={{ width: "30rem" }} className={"mt-5"}>
        {children}
      </Card>
    </>
  );
}

export default LoginCard;
