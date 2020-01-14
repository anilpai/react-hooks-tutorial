import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ n, incr }) => {
  useCountRenders();
  return <button onClick={() => incr(n)}>{n}</button>;
});
