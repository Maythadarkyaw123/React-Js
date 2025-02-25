import { UserRole } from "./UserRole";
function App(){
  return(
    <>
    
      <UserRole user={'admin'}/>  
      {/* Output of welcome admin */}


      <UserRole />
      {/* Output of Please select the role */}

    </>
  );
}
export default App;