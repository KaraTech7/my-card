import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Adhika HomePage" />
        <meta name="author" content="Adhika Candra" />
        <meta name="author" content="KARA" />
        <link
          rel="apple-touch-icon"
          href="https://i.ibb.co/bsztFmD/adhikakids.png"
        />
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/bsztFmD/adhikakids.png"
          type="image/x-icon"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Adhika Candra" />
        <meta name="og:title" content="Adhika Candra" />
        <meta property="og:type" content="website" />
        <title>KARA</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
