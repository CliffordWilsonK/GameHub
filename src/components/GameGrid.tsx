import type { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

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

  const fetchedGamesLength = data?.pages.reduce((total, page) => 
    total + page.results.length, 0) || 0

  return (
      <InfiniteScroll 
         dataLength={fetchedGamesLength} 
         hasMore={!!hasNextPage}
         loader={<Spinner />}
         next={() => fetchNextPage()}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          padding={6}
          boxSizing="border-box"
        >
          {data.pages?.map((page, index) => 
          <React.Fragment key={index}>
            {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
            ))}
          </React.Fragment>)}
        </SimpleGrid>
      </InfiniteScroll>
  );
};

export default GameGrid;
