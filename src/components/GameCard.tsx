import { type Game } from "@/hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";

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
    </Card.Root>
  );
};

export default GameCard;
