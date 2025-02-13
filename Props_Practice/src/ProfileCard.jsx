function ProfileCard({name,bio,description}){
    return(
        <div className="mycard">
            <h1>{name}</h1>
            <h3>{bio}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;