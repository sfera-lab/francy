import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui-engine";

const meta = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    type: "single",
    collapsible: true,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Accordion {...args} style={{ width: 360 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is ui-engine?</AccordionTrigger>
        <AccordionContent>
          A generic React component library built on Radix UI primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it require Tailwind?</AccordionTrigger>
        <AccordionContent>
          No. Styling is driven entirely by CSS custom properties, so it
          works with any styling setup.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
