import { Box, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GenreList from "../components/GenreList";

const HomePage = () => {
  return (
    <>
      <Box hideBelow="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Box>
      <GridItem area={"main"}>
        <Box paddingX={6}>
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </>
  );
};

export default HomePage;
