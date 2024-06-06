import React from 'react';

const Current = () => {
  const Dates = new Date().toLocaleDateString();
  const Time = new Date().toLocaleTimeString();
  const Datetime = new Date().toLocaleString();
  return(
    <>
      <p>Current time is {Dates}</p>
      <p>Current time is {Time}</p>
      <p>Current time is {Datetime}</p>
    </>
  );
}

const App = () => {
  return(
    <>
      <Current />
    </>
  );
}

export default App;

