import { useState } from "react";

function RandomNum(){
    const [num, setNum] = useState(0);

    const myClick = () =>{
        setNum(myrandom => Math.floor(
            (
                Math.random(myrandom)
            )*100)
        );
    };

    return(
        <>
            <p>Random Number: {num}</p>
            <button type="button" onClick={myClick}>Random</button>

        </>
    );
};

export default RandomNum;