import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"100%"} py={4} bg="black" color="white">
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Heading>Mining # Hash</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                    <Link href={"/info"} mx={2}>Info</Link>
                </Flex>
                <ConnectWallet />
            </Flex>
        </Container>
    )
};
