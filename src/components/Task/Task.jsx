import { Box, Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Input, ListItem } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export function Task(props) {

    let { task, onUpdate, onDelete, onCheck } = props;
    let bgColor = task.state ? "#C6FFBA" : "#FFB5B5";

    const onCompleatedTaskClick = () => {
        task.state = !task.state;
        onCheck(task);
    };

    return (
        <>
            <ListItem border={"1px solid #fff"} borderRadius={"lg"} mb={"3rem"} p={"1rem"} w={"min-content"} bg={bgColor}>
                <Box>
                    <FormControl>
                        <Flex gap={10}>
                            <Box>
                                <FormLabel fontSize={20} fontWeight={"bold"}>{task.name}</FormLabel>
                                <FormHelperText>{task.description}</FormHelperText>
                            </Box>
                            <Checkbox size={"lg"} borderColor={"gray"} colorScheme="orange" isChecked={task.state}onChange={onCompleatedTaskClick}/>
                        </Flex>
                    </FormControl>
                </Box>
                <br />
                <Flex gap={5}>
                    <Button gap={3} onClick={() => onUpdate(task)} leftIcon={<EditIcon/>}>
                        Edit
                    </Button>
                    <Button gap={3} onClick={() => onDelete(task)} leftIcon={<DeleteIcon/>}>
                        Delete
                    </Button>
                </Flex>
            </ListItem>
        </>
    );
}