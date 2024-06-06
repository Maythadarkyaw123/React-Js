const Myevent = ()=>{

  const myClick = (a,b)=>{
    let ans = a * b ;
    console.log(ans);
    console.log("You clicked me!");
    alert("Answer is "+ ans);
  };
  return(
    <>
     <button onClick={()=>myClick(5,2)}>onClick</button>
    </>
  );
};


function App(){
  return(
    <div>
      <Myevent />
    </div>
  );
}
export default App;

