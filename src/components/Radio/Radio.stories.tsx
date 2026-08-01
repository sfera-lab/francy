import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "ui-engine";

const meta = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    "aria-label": "Plan",
    defaultValue: "basic",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="basic" /> Basic
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="pro" /> Pro
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="enterprise" disabled /> Enterprise (disabled)
        </label>
      </div>
    </RadioGroup>
  ),
};
