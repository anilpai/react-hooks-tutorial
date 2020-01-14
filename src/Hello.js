import React from "react";

export const Hello = React.memo(({ incr }) => {
  return <button onClick={() => incr(5)}>hello</button>;
});
