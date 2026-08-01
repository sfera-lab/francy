import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RadioGroup, RadioGroupItem } from "./Radio";

describe("RadioGroup", () => {
  it("only allows one item checked at a time", async () => {
    render(
      <RadioGroup aria-label="Plan" defaultValue="basic">
        <RadioGroupItem value="basic" aria-label="Basic" />
        <RadioGroupItem value="pro" aria-label="Pro" />
      </RadioGroup>
    );

    const basic = screen.getByRole("radio", { name: "Basic" });
    const pro = screen.getByRole("radio", { name: "Pro" });

    expect(basic).toHaveAttribute("data-state", "checked");
    await userEvent.click(pro);
    expect(pro).toHaveAttribute("data-state", "checked");
    expect(basic).toHaveAttribute("data-state", "unchecked");
  });
});
