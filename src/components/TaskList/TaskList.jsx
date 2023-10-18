import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { useTasks } from "../../hooks/useTasks";
import { TaskForm } from "../TaskForm/TaskForm";
import { Button, UnorderedList, Box, Center } from "@chakra-ui/react";

export function TaskList() {
    const [tasks, createTask, deleteTask, updateTask] = useTasks();
    let [isAdding, setAdding] = useState(false);

    const handleCreateTask = (newTask) => {
        createTask(newTask);
        setAdding(false);
    };

    let openForm = () => {
        setAdding(true);
    };

    let handleUpdateTask = (task) => {
        let newDescription = prompt("Enter the new description of the task: ");
        task.description = newDescription;
        updateTask(task);
    };

    let handleDeleteTask = (task) => {
        deleteTask(task)
    };

    let checkTask = (task) => {
        updateTask(task);
    }

    return (
        <>
            <Box>
                <UnorderedList listStyleType={"none"}>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onUpdate={handleUpdateTask}
                            onDelete={handleDeleteTask}
                            onCheck={checkTask}
                        />
                    ))}
                </UnorderedList>
                <Center>
                    <Button onClick={openForm}>Add</Button>
                </Center>
                {isAdding && (<TaskForm onCreate={handleCreateTask} />)}
            </Box>
        </>

    );
}