import type { Platform } from "@/hooks/useGames";
import { Text, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    mac: FaApple,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      {platforms.map((platform, id) => (
        <Icon key={id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </>
  );
};

export default PlatformIconList;
