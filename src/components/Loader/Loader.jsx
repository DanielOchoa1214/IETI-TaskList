import { Center, Spinner } from "@chakra-ui/react";

export function Loader() {
    return (
        <Center>
            <Spinner thickness='4px' size='xl' color='orange.300'/>
        </Center>
    );
    
}