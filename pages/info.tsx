/* eslint-disable react/no-unescaped-entities */
import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Info() {
    return (
        <Container maxW="x2" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Info # Hash</Heading>
                    <Text fontSize="xl">MemeHash is a unique project that combines the world of memes and cryptocurrencies. Users can acquire various types of NFTs and stake them to earn Hash tokens as rewards. NFT staking opens up new opportunities for increasing productivity, efficiency, and profitability in the mining world.





</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Tokenomics</Heading>
                    <Text mb={2}><b>Supply: 10 billion HASH tokens</b></Text>
                    <Text>- Mining in EVM networks 40% = 4 billion</Text>
                    <Text>- Mining in TVM networks 40% = 4 billion</Text>
                    <Text>- Partnerships and Listing 10% = 1 billion</Text>
                    <Text>- Community Development (rewards) 5%</Text>
                    <Text>- Ecosystem Formation (team) 5%</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Roadmap</Heading>
                    <Text>
                        - Idea Development <Icon as={MdCheckCircle} color="green.500" /><br />
                        - Token Issuance (explorer)<br />
                        - Deployment of dApp in EVM<br />
                        - EVM Ecosystem Formation<br />
                        - Launch of quests and tasks<br />
                        - Partner acquisition (listing)<br />
                        - Deployment of dApp in TVM<br />
                        - Expanded integration
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Whitepaper/Mechanics #hash</Heading>
                    <Text>- 80% of tokens are allocated for NFT staking, ensuring stability and protection of our ecosystem.</Text>
                    <Text>- 10% is allocated as a reward for partners, trading platforms, and their communities, incentivizing active participation and encouraging their support in the project's development.</Text>
                    <Text>- 5% are allocated to various quests, tasks, and events that contribute to the growth of our community.</Text>
                    <Text>- The remaining 5% is used to strengthen the ecosystem through liquidity provision, support for external developers, and integration of new solutions for our users.</Text>
                    <Divider mb={5} />
                    <Text mb={4}><b>Participants acquire and stake NFTs to receive #hash tokens as rewards, with mining speed depending on the quantity and characteristics of NFTs. The project provides for 4 types of NFTs:</b></Text>
                    <Text mb={2}>- NFT Hub / 0$ / explorer</Text>
                    <Text mb={2}>- NFT GPU / $1.99 / explorer</Text>
                    <Text mb={2}>- NFT Asic / $9.50 / explorer</Text>
                    <Text mb={2}>- NFT Farm / $29.20 / explorer</Text>
                    <Text>- Anyone can participate, there are no regional restrictions.</Text>
                    <Text>- To mine #hash tokens, it is necessary to mint NFT premises, minting is one-time per participant account. Cost of NFT 0 USDT + gas.</Text>
                    <Text>- Acquiring NFT GPU and staking, mining speed # 0.042 per hour / price $1.99 each.</Text>
                    <Text>- Acquiring NFT Asic and staking, mining speed # 0.42 per hour / price $9.50 each.</Text>
                    <Text>- Acquiring NFT Farm and staking, mining speed # 2.42 per hour / price $29.20 each.</Text>
                    <Divider mb={5} />
                    <Text><b>Profit distribution from NFT sales:</b></Text>
                    <Text>- Liquidity Pool HASH/USDT (50%): Ensures stability and liquidity in the trading pairs. / explorer</Text>
                    <Text>- Treasury Fund (35%): Forms reserves for future investments and project development. / explorer</Text>
                    <Text>- Team Fund (15%): Provides funding for the team to continue product development and enhancement. / explorer</Text>
                    <Divider mb={5} />
                    <Text>
                        <span style={{ color: 'red' }}>*</span>
                        Token claiming principle: Tokens are claimed on a first-come, first-served basis. It's important to note that if the pool is empty, you won't be able to claim your tokens.
                    </Text>

                </Box>
            </Box>
        </Container>
    );
}
