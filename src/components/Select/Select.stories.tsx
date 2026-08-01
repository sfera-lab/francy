import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ui-engine";

const meta = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    defaultValue: "apple",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger aria-label="Fruit" style={{ width: 200 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="dragonfruit" disabled>
          Dragonfruit (out of stock)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};
