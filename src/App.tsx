import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Box hideBelow="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Box>
      <GridItem area={"main"}>Main</GridItem>
    </Grid>
  );
}

export default App;
