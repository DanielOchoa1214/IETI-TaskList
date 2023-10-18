import { Center, Heading, Image } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <>
            <Center flexDirection={"column"} gap={10}>
                <Heading as={"h2"}>Welcome to this very cool and wonderful ToDo list!!</Heading>
                <Image src="/src/assets/peepo.gif" alt="Me dañe :(" />
            </Center>
        </>
    );
}