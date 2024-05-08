import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import { Text, Button, Container, Flex, Heading, SimpleGrid, Spinner, Box, Card } from "@chakra-ui/react";
import NFT from "../components/NFT";

export default function Shop() {
    const { contract } = useContract(TOOLS_ADDRESS);
    const { data: nfts, isLoading, isError } = useNFTs(contract);
    console.log(nfts);

    return (
        <Box bg="gray.100" w="100%" p={4}>
            <Container maxW={"1200px"}>
                <Card p={4} boxShadow="md">
                    <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Link href="/">
                            <Button>Back</Button>
                        </Link>
                    </Flex>
                    <Heading mt={"40px"}>Shop</Heading>
                    <Text>Purchase tools with $Tether (USDT) to increase your earnings.</Text>
                    {isLoading ? (
                        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
                            <Spinner />
                        </Flex>
                    ) : isError ? (
                        <Box>Error loading products. Please try again later.</Box>
                    ) : (
                        <SimpleGrid columns={3} spacing={10}>
                            {nfts?.map((nftItem) => (
                                <NFT
                                    key={nftItem.metadata.id}
                                    nft={nftItem}
                                />
                            ))}
                        </SimpleGrid>
                    )}
                </Card>
            </Container>
        </Box>
    );
}
