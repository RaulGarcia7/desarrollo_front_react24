import { useState, useEffect } from "react"

function Countdown() {
    const [seconds, setSeconds] = useState(0);
    const [countdownButton, setCountdownButton] = useState(false);

    useEffect(() => {
        let interval;

        if (countdownButton) {
            interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return() => clearInterval(interval); // Usar para limpiar si no se utiliza el componente
    }, [countdownButton]);

    return(
    <>
    <p>{seconds} segundos</p>
    <button onClick={() => setCountdownButton(!countdownButton)}>
        {countdownButton ? "Pausar cronómetro" : "Iniciar cronómetro"}    
    </button> 
    </>
    );
}

export default Countdown;