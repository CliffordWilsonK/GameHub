import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder?: string;
}

const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-released", label: "Release Date" },
    { value: "name", label: "Name" },
    { value: "-metacritics", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder =
    sortOrders.find((order) => order.value === sortOrder)?.label || "Relevance";
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order By: {currentSortOrder} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => {
                  onSelectOrder(order.value);
                }}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
