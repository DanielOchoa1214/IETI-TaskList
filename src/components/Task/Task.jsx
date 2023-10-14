import { useState } from "react";
import "./Task.scss"

export function Task(props) {

    let { task, onUpdate, onDelete, onCheck } = props;

    const onCompleatedTaskClick = () => {
        task.state = !task.state;
        onCheck(task);
    };

    return (
        <li id="task">
            <div>
                <label htmlFor={task.name}>
                    {task.name}
                    <input type="checkbox" checked={task.state} name={task.name} onChange={onCompleatedTaskClick}/>
                </label>
                <small>{task.description}</small>
            </div>
            <br />
            <div>
                <button onClick={() => onUpdate(task)}>Edit</button>
                <button onClick={() => onDelete(task)}>Delete</button>
            </div>
        </li>
    );
}