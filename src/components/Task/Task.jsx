export function Task(props) {

    var { name , state } = props;

    const handleCheckTaskClick = () => {
        state = !state;
    };

    return (
        <li>
            <label htmlFor={name}>
                {name}
                <input type="checkbox" defaultChecked={state} name={name} onClick={handleCheckTaskClick}/>
            </label>
        </li>
    );
}