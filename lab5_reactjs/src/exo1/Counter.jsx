import React, { useState } from 'react';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Inc</button>
      <button onClick={decrementCounter}>Dec</button>
    </div>
  );
};

export default CounterComponent;
