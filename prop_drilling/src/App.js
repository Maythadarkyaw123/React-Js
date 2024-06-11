import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState(" ");


  useEffect(() => {
    setName("May Thadar");
  }, []);

  return (
    <>
      <p>App component</p>
      <Parent name={name} />  
    </>
  );
}

function Parent({ name }) {
  return (
    <>
      <p>Parent component</p>
      <Child name={name} />  
    </>
  );
}

function Child({ name }) {
  return (
    <>
      <p>Child component</p>
      <p>Name: {name}</p>  \
    </>
  );
}

export default App;
