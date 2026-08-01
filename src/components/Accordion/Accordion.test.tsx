import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

describe("Accordion", () => {
  it("expands an item's content when its trigger is clicked", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is ui-engine?</AccordionTrigger>
          <AccordionContent>A React component library.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("What is ui-engine?");
    expect(trigger).toHaveAttribute("data-state", "closed");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("data-state", "open");
  });
});
