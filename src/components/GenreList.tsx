import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/getCroppedImages";
import useGameQueryStore from "@/store";
import {
  HStack,
  List,
  Image,
  SkeletonCircle,
  Stack,
  Skeleton,
  Button,
  Heading,
} from "@chakra-ui/react";


const GenreList = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  const { data, isLoading, error } = useGenres();
  const popularGenres = data?.results;
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
      <Heading size={"2xl"} fontWeight={"bold"}>
        Genres
      </Heading>
      <List.Root paddingY={2} unstyled>
        {popularGenres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                fontWeight={
                  genre.id === selectedGenreId ? "bolder" : "normal"
                }
                onClick={() => setSelectedGenreId(genre.id)}
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
