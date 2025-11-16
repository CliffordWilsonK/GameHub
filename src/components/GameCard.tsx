import { type Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/getCroppedImages";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={getCroppedImage(game.background_image)} alt={game.name} />
      <HStack justifyContent="space-between" margin={5}>
        <HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </HStack>
        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
      <Card.Body gap="2" padding={"0 20px 20px 20px"}>
        <Text textStyle="2xl" fontWeight="bold">
          {game.name}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
