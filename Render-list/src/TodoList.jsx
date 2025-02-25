function TodoList(){
    //creating list items
    const tasks = [
        "Learn React",
        "Practice JavaScript",
        "Build a project"
    ]

    //in rendering list need to use map build in method to display array item
    const mytasks = tasks.map(
        tasks => <li>{tasks}</li>
    )

    //return 
    return(
        <ol>{mytasks}</ol>
    );
}

export default TodoList;

