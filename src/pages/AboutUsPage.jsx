import { Card, CardBody, CardHeader, Heading, ListItem, Text, UnorderedList, Image, Flex } from "@chakra-ui/react";


export default function AboutUsPage() {
    return (
        <Flex align={"center"} justify={"center"} marginBlock={"auto"} gap={"3rem"}>
            <Image src="/src/assets/pepo-notes.gif" borderRadius='lg' h={"300px"}/>
            <Card maxW={"90ch"}>
                <CardHeader>
                    <Heading as={"h2"}>About Us</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This is a basic Todo Aplication, here you can store what ever task you have to get thru in your day, week or generaly in your life.</Text>
                    <UnorderedList ml={"3rem"} mt={"0.5rem"}>
                        <ListItem>You can create new tasks using the "Add" button.</ListItem>
                        <ListItem>Also you are able to edit their description, in case you need to with the "Edit" button.</ListItem>
                        <ListItem>And lastly, you can delete any task you dont need to have here anymore with the "Delete" button.</ListItem>
                    </UnorderedList>
                    <Text mt={"1rem"}>This is an aplication created for a college course with:</Text>
                    <UnorderedList ml={"3rem"} mt={"0.5rem"}>
                        <ListItem>React</ListItem>
                        <ListItem>VITE.</ListItem>
                        <ListItem>Chakra UI</ListItem>
                        <ListItem>Love</ListItem>
                    </UnorderedList>
                    <Text mt={"1rem"}>Author: Daniel Ochoa</Text>
                </CardBody>
            </Card>
        </Flex>
    );
}