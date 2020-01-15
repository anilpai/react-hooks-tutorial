import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function Index() {
  const { value } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{value}</div>
    </div>
  );
}
