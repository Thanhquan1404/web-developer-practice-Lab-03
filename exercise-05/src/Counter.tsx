// src/Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h3>Counter</h3>
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="counter-btn decrement">-</button>
        <button onClick={reset} className="counter-btn reset">Reset</button>
        <button onClick={increment} className="counter-btn increment">+</button>
      </div>
    </div>
  );
};

export default Counter;
