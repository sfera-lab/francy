import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField, Input } from "ui-engine";

const meta = {
  title: "Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    label: "Email",
    children: <Input placeholder="you@example.com" />,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithHint: Story = {
  args: { hint: "We'll never share your email." },
};

export const WithError: Story = {
  args: { error: "Email is required." },
};
