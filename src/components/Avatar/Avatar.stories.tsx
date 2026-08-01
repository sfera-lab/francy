import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarFallback, AvatarImage } from "ui-engine";

const meta = {
  title: "Feedback/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="User avatar" />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  ),
};
