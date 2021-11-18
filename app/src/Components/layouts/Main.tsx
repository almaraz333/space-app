import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import Header from "../Header";

type MainProps = {
  router: any;
};

const Layout: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Colton Almaraz - Homepage</title>
      </Head>
      <Header path={router.path} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
