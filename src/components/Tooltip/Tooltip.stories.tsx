import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "ui-engine";

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>A helpful tooltip</TooltipContent>
    </Tooltip>
  ),
};
