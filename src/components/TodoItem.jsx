import React from 'react'

export function TodoItem({ lista, toogleTask }) {
    const { id, task, completed } = lista;

    const handleTaskClick = () => {
        toogleTask(id);
    }
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={handleTaskClick}/>{task}
        </li>
    );
}
