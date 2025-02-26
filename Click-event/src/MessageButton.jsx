function MessageButton(){
    function myClick(){
        alert("Hello, React!");
    }   
    return <button onClick={myClick}>Click Me</button>
     
}
export default MessageButton;