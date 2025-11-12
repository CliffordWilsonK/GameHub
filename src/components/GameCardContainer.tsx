import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="sm" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
