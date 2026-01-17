import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length < limit) {
    return <Text>{children}</Text>;
  }

  const summary = children.substring(0, limit);
  return (
    <>
      {expanded ? <Text>{children}</Text> : <Text>{summary}...</Text>}
      <Button
        bgColor={"yellow.300"}
        size={"xs"}
        fontWeight={"bold"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read more"}
      </Button>
    </>
  );
};

export default ExpandableText;
