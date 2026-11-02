import React from "react";
import { useCounterStore } from "../store";

function MultipleSelectorss() {
  const { count, text, increase, reset } = useCounterStore((state) => ({
    count: state.count,
    text: state.text,
    increase: state.increase,
    reset: state.reset,
  }));

  return (
    <div>
      <p>{text}</p>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MultipleSelectorss;
