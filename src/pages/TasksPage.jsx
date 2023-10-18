import { Flex, Image } from "@chakra-ui/react";
import { TaskList } from "../components/TaskList/TaskList";

export default function TasksPage() {
    return (
        <Flex align={"center"} justify={"space-around"}>
            <TaskList/>
            <Image src="/src/assets/peepo-comfi.png" alt="Me dañe :(" w={"300px"}/>
        </Flex>
    );
}