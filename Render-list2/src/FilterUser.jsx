function FilterUser(){
    const people = [
        {id: 1, name: "May", age: 21},
        {id: 2, name: "Yoon", age: 25},
        {id: 3, name: "Eaint", age: 27}
    ];

    const filter_People = people.filter(
        mypeople => mypeople.age >= 25
    );


    //display all text in return
    return(
        <>
            <h1>People who are 25 or more: </h1>
            <ul>
                {filter_People.map(person => 
                <li key={person.id}> {person.name} - {person.age}</li>
                )}
            </ul>
        </>
    );

}

export default FilterUser;