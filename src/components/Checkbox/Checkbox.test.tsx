import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("toggles checked state on click", async () => {
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });

    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });
});
