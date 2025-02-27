import React, { useState } from 'react';

function SimpleCounter() {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);
  
  // Updating the state variable
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default SimpleCounter;