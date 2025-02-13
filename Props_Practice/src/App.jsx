import ProfileCard from "./ProfileCard";

function App(){
  return(
    <div>
      <ProfileCard 
        name="Alice"
        bio="Frontend Developer"
        description="I am a self-motivated, reliable, responsible, and hard working person"
      />
      <ProfileCard 
        name="Bob"
        bio="Graphic Designer"
        description="Dynamic and innovative Graphic Designer with 4 years of experience in the gaming and entertainment industry"
      />
    </div>
  );
}

export default App;