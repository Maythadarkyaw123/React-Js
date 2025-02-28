import { useState } from "react";

function DoubleCounter(){
    const [count, setCount] = useState(0);

    const myClick = () => {

        //normal , this will take old state which is 0
        //setCount(count + 2) 

        //updater function, correct update
        setCount(prev => prev + 1);    //this will take previous state which was already updated
        setCount(prev => prev + 1);
    };

    return(
        <div>
            <button type="button" onClick={myClick}>2x Incre</button>

            <p>Increment: {count}</p>

        </div>
    );

};

export default DoubleCounter;