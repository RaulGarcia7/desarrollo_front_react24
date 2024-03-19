import { useState } from "react";

function TextToH1() {
    const [textInput, setTextInput] = useState("");

    const inputChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <>
        <h1>{textInput}</h1>
        <input type="text" placeholder="Escribe para H1" value={textInput} onChange={inputChange} />
        </>
        
    );
}

export default TextToH1;