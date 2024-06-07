//Question: Write a component that uses JSX to render a header , a pragraph  and a list of items.

import React from "react";
import { Component} from "react";

const Myjsx = () =>{
return(
<>
<header>
	Hello , This is Header.
</header>
<p>
	This is paragraph.
</p>
<ul>
	<li>orange</li>
	<li>apple</li>
	<li>pineapple</li>
</ul>
</>
);
}

const App = () => {
	
		return(
			<Myjsx />
);

}

export default App;