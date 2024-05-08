import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "PolygonZkevmTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ChakraProvider>
        <NavBar/>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
