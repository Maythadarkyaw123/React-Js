import ProfileCard from "./ProfileCard.jsx"; 
                     

function App() {
  return (
    <div>
      <ProfileCard
      name = "May"
      age = {21}
      message = "Hello" /> 

      <ProfileCard 
      name={undefined} 
      age={undefined} 
      message={undefined} />
    </div>
    
  );
}

export default App;
