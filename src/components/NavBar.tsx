import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="5px 15px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
