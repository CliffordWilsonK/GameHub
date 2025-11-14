import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/getCroppedImages";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  const popularGenres = data.slice(0, 13);

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
