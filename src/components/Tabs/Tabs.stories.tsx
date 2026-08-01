import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "ui-engine";

const meta = {
  title: "Layout/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    defaultValue: "account",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args} style={{ width: 320 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings panel.</TabsContent>
      <TabsContent value="billing">Billing settings panel.</TabsContent>
    </Tabs>
  ),
};
