import { useState } from "react";


function ToDoList () {

    const[task, setTask] = useState("");
    const[list, setList] = useState([]);

    const inputChange = (e) => {
        setTask(e.target.value);
    };

    const addToList = () => {
        if (task.trim() !== "" && !list.includes(task.trim())) {
            setList([...list, task.trim()]);
            setTask("");
        } else {
            alert("¡Atención! Pon una tarea válida");
        }
    };
      
    const deleteTask = (taskToDelete) => {
        const updatedList = list.filter((tarea) => tarea !== taskToDelete);
        setList(updatedList);
    };

    const editTask = (taskToEdit, newTask) => {
        const updatedList = list.map((tarea) => (tarea === taskToEdit ? newTask : tarea));
        setList(updatedList);
    };

    const handleEdit = (taskToEdit) => {
        const newTask = prompt("Edit task:", taskToEdit);
        if (newTask !== null) {
            editTask(taskToEdit, newTask);
        }
    };

    return(
        <>
        <h1>Lista de tareas</h1>
        
        <ul>
            {list.map((tarea, index) => (
                <li key={index}>
                    {tarea}
                    <button onClick={() => handleEdit(tarea)}>Editar</button>
                    <button onClick={() => deleteTask(tarea)}>X</button>
                </li>
            ))}
        </ul>
        <input type="text"
        value={task}
        onChange={inputChange}
        />
        <br /> <br />
        <button onClick={() => addToList(task)}>Añadir tarea</button>
        </>
        
    );
}

export default ToDoList;