export function UserRole({user}){
    if(user == 'admin'){
        return <h1>Welcome Admin</h1>
    }
    if (user == 'user') {
        return <h1>Welcome User</h1>
    } else {
        return <h1>Please select the role</h1>
    }
}