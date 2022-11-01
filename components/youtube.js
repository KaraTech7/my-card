import { Box, Section, GridItem, SimpleGrid } from "@chakra-ui/react";

const Youtube = () => (
  <Section delay={0.3}>
    <Heading as="h3" variant="section-title">
      Youtube
    </Heading>
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        href="https://www.youtube.com/channel/UCSxtlNP2B3WJQ6bHBewbG5g"
        title="KARA"
        thumbnail={thumbYouTube}
      >
        My YouTube Channel
      </GridItem>
      <GridItem
        href="https://www.youtube.com/channel/UCSxtlNP2B3WJQ6bHBewbG5g"
        title="KARA"
        thumbnail={thumbYouTube}
      >
        My YouTube Channel
      </GridItem>
    </SimpleGrid>

    <Box align="center" my={4}>
      <NextLink href="/posts" passHref scroll={false}>
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Popular posts
        </Button>
      </NextLink>
    </Box>
  </Section>
);

export default Youtube;
