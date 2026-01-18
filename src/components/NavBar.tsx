import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="5px 15px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"contain"} />
      </Link>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
