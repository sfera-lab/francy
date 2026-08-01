import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "ui-engine";

const meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open filters</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerTitle>Filters</DrawerTitle>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open from left</Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerTitle>Navigation</DrawerTitle>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromBottom: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open from bottom</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerTitle>Details</DrawerTitle>
      </DrawerContent>
    </Drawer>
  ),
};
