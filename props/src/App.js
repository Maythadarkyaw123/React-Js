//Question: Write a component that takes a name prop and displays a greeting message using that name.

import React from 'react';

const Greeting = ({name}) =>{
return (
<h1>Hello, Greeding {name} from here!</h1>
);
}

const App = ({name}) => {
return(
<Greeting name = "may"/>
);
}

export default App;

