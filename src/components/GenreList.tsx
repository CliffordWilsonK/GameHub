import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/getCroppedImages";
import {
  HStack,
  List,
  Image,
  SkeletonCircle,
  Stack,
  Skeleton,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const popularGenres = data.slice(0, 16);
  const skeletons = [...Array(16).keys()];

  if (error) return null;

  if (isLoading) {
    return (
      <List.Root paddingY={2} unstyled>
        {skeletons.map((skeleton) => (
          <List.Item paddingY={1} key={skeleton}>
            <HStack gap="2">
              <SkeletonCircle size="32px" />
              <Stack flex="1">
                <Skeleton height="5" />
              </Stack>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    );
  }

  return (
    <div>
      <List.Root paddingY={2} unstyled>
        {popularGenres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={
                  genre.id === selectedGenre?.id ? "bolder" : "normal"
                }
                onClick={() => onSelectGenre(genre)}
                paddingX={0}
                variant={"plain"}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
};

export default GenreList;
