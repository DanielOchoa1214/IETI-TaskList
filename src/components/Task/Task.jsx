import { useState } from "react";

export function Task(props) {

    let { name , state, onCompleatedClick } = props;

    const onCompleatedTaskClick = () => {
        state = !state;
        onCompleatedClick(name, state);
    }

    return (
        <li>
            <label htmlFor={name}>
                {name}
                <input type="checkbox" checked={state} name={name} onChange={onCompleatedTaskClick}/>
            </label>
        </li>
    );
}