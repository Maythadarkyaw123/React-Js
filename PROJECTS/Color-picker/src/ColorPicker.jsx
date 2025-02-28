import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState('#ffffff');
    const [copied, setCopied] = useState(false);

    const colorClick = (e) =>{
        setColor(e.target.value);
        setCopied(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color); // Copy color code
        setCopied(true);
      };
    

    return(
        <>
            <input type="color" name="color" id="color" onChange={colorClick}/>

            <p>Color Code : {color}</p>

            <button onClick={copyToClipboard}>Copy Color Code</button>
            
            {/* If copied is true, the <p> tag (<p style={{ color: "green" }}>Copied to Clipboard!</p>) is rendered.
            </p>If copied is false, nothing is rendered (it acts as if this line doesn’t exist). */}
            {copied && <p style={{ color: "green" }}>Copied!</p>}
        
        </>
    );

};

export default ColorPicker;