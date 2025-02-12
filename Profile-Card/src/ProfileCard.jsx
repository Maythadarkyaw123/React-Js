// src/ProfileCard.jsx
function ProfileCard() {
    const name = "John Doe";
    const bio = "Web Developer & React Enthusiast";
    const image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  
    return (
      <div className="mycard">
        <div className="card">
            <img src={image} alt="Profile" />
            <h2>{name}</h2>
            <p>{bio}</p>
            <button>Follow</button>
      </div>
      </div>
    );
  }
  
  export default ProfileCard;
  