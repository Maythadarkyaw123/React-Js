import React from "react";
import { useState } from "react";

function App(){
  const [name, setName] = useState("");

  const handleChange = (e) =>{
    setName(e.target.value);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`you typed ${name}`);
    setName("");
  }
  
  return(
    <>
    <h1>This is Form Demo</h1>
     <form onSubmit={handleSubmit}>
      <input type = "text" name = "name" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
     </form>
    </>
  );

}

export default App;