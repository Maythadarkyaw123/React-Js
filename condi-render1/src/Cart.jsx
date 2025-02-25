function Cart(props){
    if(props.count == 0){
        return <h1>Your cart is empty!</h1>
    }
    else{
        return <h1>You have {props.count} items in your cart.</h1>
    }

}
export default Cart;