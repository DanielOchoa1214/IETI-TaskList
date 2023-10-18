import { useForm } from "react-hook-form";
import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";

export function TaskForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });
    const { onCreate } = props;

    const onSubmit = (data) => {
        let newTask = {
            name: data.name,
            description: data.description
        };
        onCreate(newTask);
    };

    return (
        <>
        <Box bg={"#C4C4C4"} borderRadius={"lg"} p={"2rem"} mt={"1rem"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading fontSize={30}>Add a new task</Heading>
                <FormControl isInvalid={errors.name}>
                    <Box>
                        <FormLabel>Nombre:</FormLabel>
                        <Input
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name is too short"
                                }
                            })} />
                        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                    <Box>
                        <FormLabel>Descripcion:</FormLabel>
                        <Input {...register("description")} />
                    </Box>
                <Center>
                    <Button type="submit" mt={"1rem"}>Create</Button>
                </Center>
            </form>
        </Box>
        </>
    );

}