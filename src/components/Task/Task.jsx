import { useState } from "react";

export function Task(props) {

    let { task, onUpdate, onDelete } = props;

    const onCompleatedTaskClick = () => {
        task.state = !task.state;
        onUpdate(task);
    };

    return (
        <li>
            <label htmlFor={task.name}>
                {task.name}
                <input type="checkbox" checked={task.state} name={task.name} onChange={onCompleatedTaskClick}/>
            </label>
            <button onClick={() => onUpdate(task)}>Edit</button>
            <button onClick={() => onDelete(task)}>Delete</button>
        </li>
    );
}