import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { FARMER_ADDRESS, REWARDS_ADDRESS, STAKING_ADDRESS, TOOLS_ADDRESS } from "../const/addresses";
import { ClaimFarmer } from "../components/ClaimFarmer";
import { Inventory } from "../components/Inventory";
import { Equipped } from "../components/Equipped";
import { BigNumber, ethers } from "ethers";
import { Text, Box, Card, Container, Flex, Heading, SimpleGrid, Spinner, Skeleton } from "@chakra-ui/react";
import { maxHeaderSize } from "http";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract: farmercontract } = useContract(FARMER_ADDRESS);
  const { contract: toolsContract } = useContract(TOOLS_ADDRESS);
  const { contract: stakingContract } = useContract(STAKING_ADDRESS);
  const { contract: rewardContract } = useContract(REWARDS_ADDRESS);

  const { data: ownedFarmers, isLoading: loadingOwnedFarmers } = useOwnedNFTs(farmercontract, address);
  const { data: ownedTools, isLoading: loadingOwnedTools } = useOwnedNFTs(toolsContract, address);

  const { data: equippedTools } = useContractRead(
    stakingContract,
    "getStakeInfo",
    [address]
  );

  const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [address]);

  if (!address) {
    return (
      <Flex direction="column" minHeight="100vh" justifyContent="center" alignItems="center" bg="gray.200">
        <Heading my={8}>Start # HASH</Heading>
        <ConnectWallet />
      </Flex>
    );
  }

  if (loadingOwnedFarmers) {
    return (
      <Flex minHeight="100vh" justifyContent="center" alignItems="center" bg="gray.200">
        <Spinner />
      </Flex>
    );
  }

  if (ownedFarmers?.length === 0) {
    return (
      <Flex minHeight="100vh" justifyContent="center" alignItems="center" bg="gray.200">
        <ClaimFarmer />
      </Flex>
    );
  }

  return (
    <Flex direction="column" bg="gray.200" color="white">
      <Container maxW="100%" py={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Card p={5}>
            <Heading>Mining center:</Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Box>
                {ownedFarmers?.map((nft) => (
                  <div key={nft.metadata.id}>
                    <MediaRenderer
                      src={nft.metadata.image}
                      height="100%"
                      width="100%"
                    />
                  </div>
                ))}
              </Box>
              <Box>
                <Text fontSize="small" fontWeight="bold">$HASH Balance:</Text>
                {rewardBalance && (
                  <p>{(Math.round(parseFloat(ethers.utils.formatUnits(rewardBalance, 18)) * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                )}
              </Box>
            </SimpleGrid>
          </Card>
          <Card p={5}>
            <Heading>Inventory:</Heading>
            <Skeleton isLoaded={!loadingOwnedTools}>
              <Inventory
                nft={ownedTools}
              />
            </Skeleton>
          </Card>
        </SimpleGrid>
        <Card p={5} my={10} maxW="100%">
          <Heading mb={8}>Equiped Device:</Heading>
          <SimpleGrid columns={3} spacing={10}>
            {equippedTools &&
              equippedTools[0].map((nft: BigNumber) => (
                <Equipped
                  key={nft.toNumber()}
                  tokenId={nft.toNumber()}
                />
              ))}
          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
};

export default Home;
