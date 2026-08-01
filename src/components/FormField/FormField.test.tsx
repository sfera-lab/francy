import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";
import { Input } from "../Input";

describe("FormField", () => {
  it("links the label and error text to the control via aria", () => {
    render(
      <FormField label="Email" error="Email is required">
        <Input />
      </FormField>
    );

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Email is required");
  });
});
