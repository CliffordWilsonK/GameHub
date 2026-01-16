import usePlatforms, {type  Platform } from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";



const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        {selectedPlatformId ? (
          <Button variant="outline" size="sm">
            {selectedPlatform?.name} <BsChevronDown />
          </Button>
        ) : (
          <Button variant="outline" size="sm">
            Platforms <BsChevronDown />
          </Button>
        )}
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform: Platform) => (
              <Menu.Item
                disabled={selectedPlatformId === platform.id ? true : false}
                onClick={() => setSelectedPlatformId(platform.id)}
                key={platform.id}
                value={platform.name}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
