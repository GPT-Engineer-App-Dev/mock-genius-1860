import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Othello
        </Heading>
        <Grid templateColumns="repeat(8, 1fr)" gap={1}>
          {Array(64)
            .fill(null)
            .map((_, i) => (
              <GridItem key={i} w="100%" h="50px" bg="green.500" />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
