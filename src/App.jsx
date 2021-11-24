import React, { Fragment, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";

export default function App() {
    const [listas, setListas] = useState([
        {id: 1, task: "Tarea", completed: false},
    ]);

    
const taskRef = useRef();

const toogleTask = (id) => {

    const newTask = [...listas];

    const task = newTask.find((task) => task.id === id);

    task.completed =!task.completed;
    setListas(newTask);
}

const handleTaskAdd =() => {

    const task = taskRef.current.value;
    if (task === "") return;

    setListas((pervTasks) => {
        return [...pervTasks, {id:uuidv4(),task,completed:false}];
    });
    taskRef.current.value = null;    
    };

    const handleClearAll = () => {
        const newTask = listas.filter((task) => !task.completed);
        setListas(newTask);
    }
    return (
    <Fragment>
        <TodoList listas= {listas} toogleTask={toogleTask}/>
        <input ref={taskRef} type="text" placeholder="Nueva Tarea"></input>
        <button onClick={handleTaskAdd}>+</button>
        <button onClick={handleClearAll}>-</button>
    </Fragment>
    );
}
