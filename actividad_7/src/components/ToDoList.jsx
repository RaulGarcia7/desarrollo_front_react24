import { useState } from "react";
import { useToDoListContext } from "./ToDoContext";

function ToDoList() {

    const { list, modifyList } = useToDoListContext();
    const [ task, setTask ] = useState("");


    const inputChange = (event) => {
        setTask(event.target.value);
    };

    const addToList = () => {
        modifyList([...list, task]);
        setTask("");
    };

    const deleteTask = (taskToDelete) => {
        const updatedList = list.filter((tarea) => tarea !== taskToDelete);
        modifyList(updatedList);
    };
    
    const editTask = (taskToEdit) => {
        const newTodo = prompt("Edit task:", taskToEdit);
        if (newTodo !== null) {
            const updatedList = list.map((tarea) => (tarea === taskToEdit ? newTodo : tarea));
            modifyList(updatedList);
        }
    };


    return(
        <>
            <h1>Lista de tareas</h1>
            <ul>
                {list.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                        <button onClick={() => editTask(tarea)}>Editar</button>
                        <button onClick={() => deleteTask(tarea)}>X</button>
                    </li>
                ))}
            </ul>
            <input 
                id="taskInput"
                type="text"
                value={task}
                onChange={inputChange}
            />
            <br /> <br />
            <button onClick={addToList}>Añadir tarea</button>
        </>
    );

}

export default ToDoList
