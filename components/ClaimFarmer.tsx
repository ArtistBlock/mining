import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "../const/addresses";
import { Box, Container, Flex, Heading, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

export function ClaimFarmer() {
    const { contract } = useContract(FARMER_ADDRESS);
    const { data: metadata, isLoading, error } = useContractMetadata(contract);

    if (isLoading) {
        return <Spinner color="blue.500" />;
    }

    if (error) {
        return (
            <Alert status="error">
                <AlertIcon />
                There was an error processing your request
            </Alert>
        );
    }

    return (
        <Container maxW="1200px">
            <Flex direction="column" alignItems="center" justifyContent="center" h="50vh">
                <Heading mb={4}>Open a mining center</Heading>
                <Box borderRadius="8px" overflow="hidden" my={10}>
                    {metadata?.image && (
                        <MediaRenderer
                            src={metadata.image}
                            height="300px"
                            width="300px"
                        />
                    )}
                </Box>

                <Web3Button
                    contractAddress={FARMER_ADDRESS}
                    action={(contract) => contract.erc1155.claim(0, 1)}
                    style={{ width: '100%', maxWidth: '300px' }}
                >
                    Claim
                </Web3Button>
            </Flex>
        </Container>
    );
}
