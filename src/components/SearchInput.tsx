import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
