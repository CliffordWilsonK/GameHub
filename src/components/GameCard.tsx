import { type Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Text textStyle="2xl" fontWeight="bold">
          {game.name}
        </Text>
      </Card.Body>
      <Card.Footer justifyContent="space-between">
        <HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </HStack>
        <CriticScore score={game.metacritic}></CriticScore>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
