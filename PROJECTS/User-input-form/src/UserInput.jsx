import { useState } from "react";

export function UserInput() {
  const [name, setName] = useState("");
  const [age, setage] = useState(1);
  const [student, setstudent] = useState(false);

  const Myage = () =>{
    setage(age+1)
  }

  const Myage1 = () =>{
    if(age>1){     //stoping the age  value not less than 1
        setage(age-1)
    }
  }

  const MyStatus = () =>{
    setstudent(!student)
  }

  return (
    <>
      <input 
        type="text" 
        name="myname" 
        id="myname" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /><br/> 

      <button type="button" onClick={() => alert(`Welcome ${name}!`)}>Welcome msg</button> <br/>

        <h2>Age: {age}</h2>
        <button onClick={Myage}>Age + </button>
        <button onClick={Myage1}>Age - </button> <br/>

        <h2>Is Student? {student ? "Yes" : "No"}</h2> 
        <button onClick={MyStatus}>Toggle</button> 
    </>
  );
}
