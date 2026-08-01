import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

describe("Popover", () => {
  it("shows its content when the trigger is clicked", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>
    );

    expect(screen.queryByText("Popover body")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Open"));
    expect(await screen.findByText("Popover body")).toBeInTheDocument();
  });
});
