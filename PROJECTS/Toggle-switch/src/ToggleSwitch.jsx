import { useState } from "react";

function ToggleSwtich(){
    const [on, setOn] = useState(false);

    const myClick = () =>{
        setOn(prev => !prev);
    };

    return(
        <>
            <p>Switch is {on ? "ON" : "OFF"} now.</p>
            <button type="button" onClick={myClick}>Switch</button>
        </>
    );

};

export default ToggleSwtich;