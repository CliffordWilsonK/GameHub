import type Game from "@/entities/Game";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/getCroppedImages";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`games/${game.slug}`}>
      <Card.Root
        overflow="hidden"
        _hover={{
          transform: "scale(1.05)",
          transition: "0.2s ease-in-out",
          cursor: "pointer", // Optional: Tells the user "hey, click me"
        }}
      >
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
    </Link>
  );
};

export default GameCard;
