import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users(){

    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <>
            <h1>Lista de usuarios</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {users.map(user => (
                    <li key={user.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/users/${user.id}`}>
                            <span style={{ fontWeight: 'bold' }}>Nombre:</span> {user.name} 
                        </Link> 
                    </li>
                ))}
            </ul>
        </>
    );
    
}

export default Users;