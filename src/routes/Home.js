import React from "react";
import UserInput from "../components/UserInput/UserInput";

export const Home = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UserInput />
    </div>
  );
};
