import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "ui-engine";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "you@example.com",
    "aria-label": "Email",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Invalid: Story = {
  args: { invalid: true },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Can't edit this" },
};
