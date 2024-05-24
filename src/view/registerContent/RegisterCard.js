import React from "react";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import Card from "../../components/Card";
function RegisterCard({ children }) {
  return (
    <>
      <Card style={{ width: "30rem" }} className={"mt-5"}>
        {children}
      </Card>
    </>
  );
}

export default RegisterCard;
