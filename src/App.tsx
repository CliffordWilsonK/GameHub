import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Box hideBelow="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList/>
        </GridItem>
      </Box>
      <GridItem area={"main"}>
        <Box paddingX={6}>
          <GameHeading/>
          <HStack>
            <PlatformSelector />
            <SortSelector/>
          </HStack>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
