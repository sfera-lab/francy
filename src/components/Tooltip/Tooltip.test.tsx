import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

describe("Tooltip", () => {
  it("shows its content on hover", async () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Helpful info</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.queryByText("Helpful info")).not.toBeInTheDocument();
    await userEvent.hover(screen.getByText("Hover me"));
    expect(await screen.findByText("Helpful info")).toBeInTheDocument();
  });
});
