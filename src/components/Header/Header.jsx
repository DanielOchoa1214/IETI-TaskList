import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Divider, Heading } from "@chakra-ui/react";

export function Header() {
    return (
        <>
            <Center flexDirection={"column"}>
                <Heading fontSize={60} mb="1rem">Todo App</Heading>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/tasks">Tasks</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/about-us">About Us</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>
            <Divider mb={"4rem"}/>
        </>
    );
}