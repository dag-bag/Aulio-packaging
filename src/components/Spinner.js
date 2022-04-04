import React from "react";
import laoding from "../Loading.gif";
export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <img src={laoding} alt="" />
    </div>
  );
}
