import React from "react";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
