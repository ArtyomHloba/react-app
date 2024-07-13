import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function plus() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </>
  );
}

export default Counter;
