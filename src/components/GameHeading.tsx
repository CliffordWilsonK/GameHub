import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";


const GameHeading = () => {
  const {data: genres} = useGenres();
  const {data: platforms} = usePlatforms();
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)

  const genre = genres?.results.find(g => g.id === genreId)
  const platform = platforms?.results.find(p => p.id === platformId)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading size="5xl" fontWeight={"bolder"} marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
