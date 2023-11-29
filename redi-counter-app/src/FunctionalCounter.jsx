import React, { useState } from 'react';

export default function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
        <h1>FUNCTIONAL COUNTER</h1>
      <p>Count: {count}</p>
      {count === 0 && <p>Count cannot be negative.</p>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}