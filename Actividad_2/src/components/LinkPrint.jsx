import { useState } from "react";

function LinkPrint() {

    const [info, setInfo] = useState("")

    const handlePrintButton = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                setInfo(data);
            })
    }
        
    

    return(
        <>
            <p>{JSON.stringify(info)}</p>
            <button onClick={handlePrintButton}>Obtener info de usuario</button>
        </>
    );  
}

export default LinkPrint