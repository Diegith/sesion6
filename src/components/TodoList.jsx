import React from 'react';
import { TodoItem }  from './TodoItem';

export function TodoList({ listas, toogleTask }) {
    return (
        <ul>
            {listas.map((lista) => (
                <TodoItem key={lista.id} lista={lista} toogleTask={toogleTask}/>
            ))}
        </ul>
    );
}
