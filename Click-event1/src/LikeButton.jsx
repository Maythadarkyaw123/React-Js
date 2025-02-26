function LikeButton(){
    let count = 0;  //important
    
    function myClick(){
        
        if(count < 5){
            count++;
            console.log(`You have ${count} likes.`);
        }
    }
    return <button onClick={myClick}>Click me</button>

}
export default LikeButton;