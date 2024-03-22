import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => {
            if (prevCount + 1 === 3) {
                throw new Error("Contador alcanzó el 3");
            }
            return prevCount + 1
        });
    };

    return(
        <>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>Incrementar</button>
        </>
    );
}

export default Counter;