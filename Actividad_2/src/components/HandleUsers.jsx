import { useEffect, useState} from "react"

function HandleUsers() {
    const [users, setUsers] = useState(["Raúl", "Jesús"]);

    useEffect(() =>{
        setUsers([...users, "Lucía"]);

        return () => {
            console.log("¡Componente destruido!");
        };
    }, []);


    return(
        <p>{users.join(", ")}</p>
    );
}

export default HandleUsers;