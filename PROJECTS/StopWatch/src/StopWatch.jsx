// import React, { useState, useEffect } from "react";

// function StopWatch() {
//   const [hours, setHours] = useState(0);
//   const [mins, setMins] = useState(0);
//   const [secs, setSecs] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setSecs((prev) => {
//           if (prev === 59) {
//             setMins((prevMins) => {
//               if (prevMins === 59) {
//                 setHours((prevHours) => prevHours + 1);
//                 return 0;         //reset mins to 0
//               }
//               return prevMins + 1;
//             });
//             return 0;               //reset secs to 0
//           }
//           return prev + 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const btnStart = () => {
//     setIsRunning(true);
//   };

//   const btnStop = () => {
//     setIsRunning(false);
//   };

//   const btnRestart = () => {
//     setIsRunning(false);
//     setHours(0);
//     setMins(0);
//     setSecs(0);
//   };

//   return (
//     <div className="container">
//       <h1>Stopwatch</h1>
//       <p>
//         {hours.toString().padStart(2, "0")}:
//         {mins.toString().padStart(2, "0")}:
//         {secs.toString().padStart(2, "0")}
//       </p>
//       <button onClick={btnStart}>Start</button>
//       <button onClick={btnStop}>Stop</button>
//       <button onClick={btnRestart}>Restart</button>
//     </div>
//   );
// }

// export default StopWatch;

import React, {useState, useEffect} from "react";

function StopWatch(){
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [isrunning, setIsrunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isrunning) {
            timer = setInterval(() => {
                setSecs((prev) =>{
                    if(prev === 59){
                        setMins((prevMins) =>{
                            if(prevMins === 59){
                                setHours((prevHours) => prevHours + 1);
                                return 0;
                            }
                            return prevMins + 1;
                        });
                        return 0;
                    }
                    return prev + 1;
                })
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);

    },[isrunning]);


    const StartWatch = () => {
        setIsrunning(true);
    }

    const StopWatch = () => {
        setIsrunning(false);
    }

    const RestartWatch = () => {
        setSecs(0);
        setMins(0);
        setHours(0);
        setIsrunning(false);
    }

    return(
        <div className="container">
            <p>
                {/* beaware of ".toString()" */}
                {hours.toString().padStart(2, "0")}:
                {mins.toString().padStart(2, "0")}:
                {secs.toString().padStart(2, "0")}
            </p>

            {/* beaware of "onClick = {StartWatch()}"  , this is wrong way to call function*/}
            <button type="button" onClick={StartWatch}>Start</button>      
            <button type="button" onClick={StopWatch}>Stop</button>
            <button type="button" onClick={RestartWatch}>Restart</button>

        </div>
    );
}

export default StopWatch;