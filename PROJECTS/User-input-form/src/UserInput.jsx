import { useState } from "react";

export function UserInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input 
        type="text" 
        name="myname" 
        id="myname" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="button" onClick={() => alert(`Welcome ${name}!`)}>Welcome msg</button>
    </>
  );
}
