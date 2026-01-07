import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        padding={6}
        boxSizing="border-box"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    );
  }
  if (error || !data) return <Text padding={6}>Something went wrong.</Text>;

  return (
    <Box padding={6}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        boxSizing="border-box"
      >
        {data.pages?.map((page) => 
        <React.Fragment>
          {page.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
          ))}
        </React.Fragment>)}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()} marginY={5}>
        {isFetchingNextPage? "Loading": "Load More"}
      </Button>
    </Box>
  );
};

export default GameGrid;
