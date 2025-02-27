import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // count state ပြောင်းလဲတိုင်းသာ useEffect ပြန် Run မှာပါ။
  //count state ပြောင်းမချင်း console.log() ပြမယ်။
//   useEffect(() => {
//     console.log(`Count is now: ${count}`);
//   }),[count]; 


    
    //[] (Empty Array) ကို ပေးလိုက်လျှင် Component တစ်ခါပဲ Render မယ်။
    //Component တစ်ခါတည်း Load သွားပြီးပြီဆိုတာကို useEffect ထဲမှာလုပ်နိုင်တယ်။
    // useEffect(() => {
    //     console.log(`Count is now: ${count}`);
    //    }),[];


    //useEffect ကြေညာထားတဲ့ Code ဟာ Component က Render ဖြစ်တိုင်း ပြန် Run မှာပါ။
    //console.log() က Count တိုးတိုင်း Print ပြမယ်။
    useEffect(() =>{
        console.log(`Count is now: ${count}`);
    });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
