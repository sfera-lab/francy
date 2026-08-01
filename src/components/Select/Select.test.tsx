import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

function Harness() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger aria-label="Fruit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectContent>
    </Select>
  );
}

describe("Select", () => {
  it("opens and selects an item", async () => {
    render(<Harness />);
    const trigger = screen.getByRole("combobox", { name: "Fruit" });
    await userEvent.click(trigger);

    const banana = await screen.findByText("Banana");
    await userEvent.click(banana);

    expect(trigger).toHaveTextContent("Banana");
  });
});
