import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaDropbox } from 'react-icons/fa';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Heading>Crypto Farm</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                </Flex>
                <Flex justifyContent="center" alignItems="center">
                    <Link href={"https://twitter.com/EverDrop_"} mx={2}>
                        <FaTwitter size={24} color="#333" />
                    </Link>
                    <Link href={"https://discord.gg/QMrWKjC5rn"} mx={2}>
                        <FaDiscord size={24} color="#333" />
                    </Link>
                    <Link href={"https://zealy.io/c/polygonzknftzkevm"} mx={2}>
                        <FaDropbox size={24} color="#333" />
                    </Link>
                </Flex>
                <ConnectWallet />
            </Flex>
        </Container>
    )
};
