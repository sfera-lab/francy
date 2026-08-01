import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "ui-engine";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Tell us about yourself",
    "aria-label": "Bio",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Invalid: Story = {
  args: { invalid: true },
};
