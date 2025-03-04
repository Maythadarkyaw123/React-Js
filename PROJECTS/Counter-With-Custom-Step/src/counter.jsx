import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [step , setStep] = useState();
    
    function Increment(){
        setCount(
            prev => prev + step
        );

    }

    function Decrement(){
        setCount(
            prev => prev - step
        );

    }
    return(

        <div className="myCounter">
            <p>Count: {count}</p>
            <input type="number" 
                    name="step" 
                    id="step" 
                    value={step} placeholder="Enter number of steps" 
                    onChange={(e) => setStep(Number(e.target.value))}/>
                    
            <div>
                <button type="button" onClick={Increment}>+</button>
                <button type="button">-</button>
            </div>
        </div>

    );

}

export default Counter;