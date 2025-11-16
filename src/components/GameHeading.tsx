import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading size="5xl" fontWeight={"bolder"} marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
