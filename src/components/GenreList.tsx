import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/getCroppedImages";
import {
  HStack,
  List,
  Image,
  Text,
  SkeletonCircle,
  Stack,
  Skeleton,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const popularGenres = data.slice(0, 13);
  const skeletons = [...Array(13).keys()];

  if (error) return null;

  if (isLoading) {
    return (
      <List.Root paddingY={2} unstyled>
        {skeletons.map(() => (
          <List.Item paddingY={2}>
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
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
};

export default GenreList;
