function LoginSystem({isLoggedIn}){
    if(isLoggedIn){
        return <h1>Welcome to the System.</h1>
    }
    else{
        return <h1>Login Fail.</h1>
    }
}
export default LoginSystem;