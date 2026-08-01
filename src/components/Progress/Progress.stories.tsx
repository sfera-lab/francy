import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "ui-engine";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 40,
    "aria-label": "Upload progress",
    style: { width: 260 },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
