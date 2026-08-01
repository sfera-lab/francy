import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, toast } from "ui-engine";

const meta = {
  title: "Feedback/Toast",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Queue a toast from anywhere in your app with `toast(...)`. `<Toaster />` (mounted once near your app root) renders whatever is queued — in this docs site it's already mounted globally, so the button below renders a real toast.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({ title: "Saved", description: "Your changes were saved." })
      }
    >
      Show toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({ title: "Success", description: "Operation completed.", variant: "success" })
      }
    >
      Show success toast
    </Button>
  ),
};

export const Danger: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({ title: "Error", description: "Something went wrong.", variant: "danger" })
      }
    >
      Show error toast
    </Button>
  ),
};
