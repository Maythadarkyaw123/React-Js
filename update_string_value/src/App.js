import { useState } from "react";

const Name = () =>{
  const [userName, setUserName] = useState("Unknown ");
  const changeName = () =>{
setUserName("May Thadar Kyaw");
}

return(

<>
<h1>Hello {userName}</h1>
<button onClick={changeName}>Click Me</button>
</>

);
}


function App(){
return(
  <>
  <Name />
</>
);
}


export default App;