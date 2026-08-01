import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Label } from "ui-engine";

const meta = {
  title: "Form/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email",
    htmlFor: "label-story-email",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithControl: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Label {...args} />
      <Input id="label-story-email" placeholder="you@example.com" />
    </div>
  ),
};
