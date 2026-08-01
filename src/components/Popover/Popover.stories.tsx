import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Popover, PopoverContent, PopoverTrigger } from "ui-engine";

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>Popover content goes here.</PopoverContent>
    </Popover>
  ),
};
