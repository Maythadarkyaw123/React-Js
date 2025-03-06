import { useState } from "react";

function FruitList(){
    const [fruits, setFruits] = useState(["apple","orange","grape"]);

    function addNew(){
        if (input.trim() === "") return; //prevent empty fruits
        const newone = document.getElementById("newfruit").value;            //here be aware of value
        document.getElementById("newfruit").value = "";                //after pressing add button text space will be clean
        setFruits(f => [...f, newone])
    }

    function delFruit(fruitToDelete) {
        setFruits(fruits.filter(
            (fruit) => fruit !== fruitToDelete
        ));
    }
    

    return(
        <div>
            <p>Fruits List: </p>
            <ul>
                {/* if we use "index" as key it can be rendering problem (not tracking the changes correctly) */}
                {fruits.map((fruit,index) => 
                    <li key={fruit}>
                        {fruit}
                        <button type="button" onClick={() => delFruit(fruit)}>Delete</button>

                    </li>
                    
                )} 
        
            </ul>

            {/* <input type="text" name="newfruit" id="newfruit" />
            <button type="button" onClick={addnewFruit}>Add</button> */}
            <input type="text" name="newfruit" id="newfruit" />
            <button type="button" onClick={addNew}>Add</button>
        </div>
    );

}
export default FruitList;