import usePlatforms, {type  Platform } from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
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
                onClick={() => onSelectPlatform(platform)}
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
