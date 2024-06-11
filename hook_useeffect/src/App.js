
import { useEffect,useState } from "react";

function App(){
  const [count, setCount] = useState(0);

useEffect(()=>{
  console.log(`hit me ${count} times`);

  return () => {
    
    console.log('Cleaning up...');
  };

  
},[count]);

  return(
    <div>
      <h1>This is a Counter</h1>
      <h2>You hit me {count} times.</h2>
      <button onClick={
        () =>{
          setCount(count + 1);
        }
      }>Click me</button>
      
    </div>
  );
}

export default App;