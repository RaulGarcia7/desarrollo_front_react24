import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function UserId() {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    if (!user) {
        return <div>Cargando...</div>
    }

    return(
        <>
            <h1><u>Info del usuario {id}</u></h1>
            <h2><em>Nombre: </em>{user.name}</h2>
            <h2><em>Nombre de usuario: </em>{user.username}</h2>
            <h3><em>Dirección:</em></h3>
            <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}, Cualquierpais</p>
        </>
    );
}