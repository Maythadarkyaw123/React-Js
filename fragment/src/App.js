//Question: Use react fragment to return multiple elements from a component without adding exta nodes to the dom.

import React from 'react';
import {Fragment} from'react';

const Frag = () => {
  return (
    <div>
      <h1>Fragment1</h1>
      
    </div>
  );
}

const Frag2 = () => {
  return (
    <div>
      <h1>Fragment2</h1>
      
    </div>
  );
}

const App = () => {
  return (
    <>
      <Frag />
      <Frag2 />
    </>
  );
}

export default App;