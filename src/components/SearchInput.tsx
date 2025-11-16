import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup borderRadius={20} startElement={<LuSearch />}>
      <Input placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;
