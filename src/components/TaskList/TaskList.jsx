import { Task } from "../Task/Task";

export function TaskList(props){
    const { list } = props;

    return (
        <ul>
            {list.map((task) => (
                <Task name={ task.name } state={ task.state }/>
            ))}
        </ul>
    );
}